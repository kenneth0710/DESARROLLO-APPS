import { Injectable, signal } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { UserPhoto } from '../models/photo.model';

// Clave bajo la cual se persiste la galería en localStorage
const PHOTO_STORAGE_KEY = 'camara_photos';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  // Estado reactivo privado mediante Angular Signals (se inicializa con lo guardado en localStorage)
  private photosSignal = signal<UserPhoto[]>(this.loadSavedPhotos());

  // Exposición de solo lectura del estado para los componentes
  public readonly photos = this.photosSignal.asReadonly();

  /**
   * Captura una foto permitiendo al usuario elegir origen y calidad.
   * @param isHighDef Define si la imagen se procesa en alta calidad o ahorro de datos.
   * @returns boolean true si la foto fue tomada, false si hubo error o permiso denegado.
   */
  async takeNewPhoto(isHighDef: boolean): Promise<{ success: boolean; reason?: 'permission_denied' | 'cancelled' | 'storage_full' | 'error' }> {
    try {
      // 1. Verificación y solicitud de permisos para cámara y fotos
      // (en navegador requestPermissions no está implementado: el propio navegador solicita el acceso a la webcam)
      if (Capacitor.isNativePlatform()) {
        const checkStatus = await Camera.checkPermissions();

        if (checkStatus.camera !== 'granted' || checkStatus.photos !== 'granted') {
          const request = await Camera.requestPermissions({ permissions: ['camera', 'photos'] });
          if (request.camera !== 'granted' && request.photos !== 'granted') {
            console.warn('Permisos de cámara o galería no concedidos.');
            return { success: false, reason: 'permission_denied' };
          }
        }
      }

      // 2. Parámetros dinámicos según el modo seleccionado
      const imageQuality = isHighDef ? 95 : 60;
      const targetWidth = isHighDef ? 1920 : 800;

      // 3. Captura con CameraSource.Prompt (Diálogo nativo: Cámara o Carrete)
      const capturedPhoto: Photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Prompt, // Permite al usuario elegir entre cámara o galería
        quality: imageQuality,
        width: targetWidth,
        allowEditing: false,
        promptLabelHeader: 'Seleccionar origen',
        promptLabelPhoto: 'Desde la Galería',
        promptLabelPicture: 'Tomar Fotografía'
      });

      // 4. Conversión a Base64: la URI temporal (blob:/capacitor://) no sobrevive a un reinicio,
      //    por eso se guarda el contenido de la imagen como Data URL
      const dataUrl = await this.readAsDataUrl(capturedPhoto.webPath!);

      // 5. Mapeo y actualización inmutable
      const newPhoto: UserPhoto = {
        filepath: `${Date.now()}.${capturedPhoto.format}`,
        webPath: dataUrl,
        format: capturedPhoto.format
      };

      const updatedPhotos = [newPhoto, ...this.photosSignal()];

      // 6. Persistencia en localStorage (límite aproximado de 5 MB por origen)
      if (!this.savePhotos(updatedPhotos)) {
        return { success: false, reason: 'storage_full' };
      }

      this.photosSignal.set(updatedPhotos);
      return { success: true };

    } catch (error: any) {
      // Control de cancelación del usuario
      if (error?.message?.includes('cancelled') || error?.message?.includes('User cancelled')) {
        return { success: false, reason: 'cancelled' };
      }
      console.error('Error durante la captura:', error);
      return { success: false, reason: 'error' };
    }
  }

  // Método para eliminar una imagen del estado y de localStorage
  deletePhoto(index: number): void {
    this.photosSignal.update(photos => photos.filter((_, i) => i !== index));
    this.savePhotos(this.photosSignal());
  }

  // Recupera la galería persistida; si no existe o está corrupta, inicia vacía
  private loadSavedPhotos(): UserPhoto[] {
    try {
      const stored = localStorage.getItem(PHOTO_STORAGE_KEY);
      return stored ? (JSON.parse(stored) as UserPhoto[]) : [];
    } catch (error) {
      console.error('No se pudo leer la galería guardada:', error);
      return [];
    }
  }

  // Guarda la galería; retorna false si se excede la cuota de localStorage
  private savePhotos(photos: UserPhoto[]): boolean {
    try {
      localStorage.setItem(PHOTO_STORAGE_KEY, JSON.stringify(photos));
      return true;
    } catch (error) {
      console.warn('No se pudo guardar la galería en localStorage:', error);
      return false;
    }
  }

  // Lee la imagen desde su URI temporal y la convierte en Data URL (Base64)
  private async readAsDataUrl(webPath: string): Promise<string> {
    const blob = await (await fetch(webPath)).blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = () => reject(reader.error);
      reader.onload = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
  }
}
