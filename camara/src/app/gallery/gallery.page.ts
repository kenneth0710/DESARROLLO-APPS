import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonGrid, IonRow, IonCol, IonImg, IonFab,
  IonFabButton, IonIcon, IonCard, IonButton,
  IonItem, IonLabel, IonToggle, ToastController
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { camera, trashOutline, sparkles, flashOffOutline } from 'ionicons/icons';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonGrid, IonRow, IonCol, IonImg, IonFab,
    IonFabButton, IonIcon, IonCard, IonButton,
    IonItem, IonLabel, IonToggle
  ],
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Evidencias de Campo</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <!-- Configuración de calidad -->
      <ion-item lines="none">
        <ion-icon [name]="isHighDef() ? 'sparkles' : 'flash-off-outline'" slot="start" color="primary"></ion-icon>
        <ion-label>
          <h3>Modo Alta Definición</h3>
          <p>{{ isHighDef() ? '1920px (Calidad 95% - Alta)' : '800px (Calidad 60% - Ahorro)' }}</p>
        </ion-label>
        <ion-toggle
          [checked]="isHighDef()"
          (ionChange)="toggleQuality($event.detail.checked)">
        </ion-toggle>
      </ion-item>

      <ion-grid>
        <ion-row>
          @for (photo of photoService.photos(); track photo.filepath; let i = $index) {
            <ion-col size="12" size-md="6" size-lg="4">
              <ion-card>
                <ion-img [src]="photo.webPath" [alt]="photo.filepath"></ion-img>
                <div class="ion-padding">
                  <ion-button color="danger" fill="clear" expand="block" (click)="photoService.deletePhoto(i)">
                    <ion-icon slot="start" name="trash-outline"></ion-icon>
                    Eliminar
                  </ion-button>
                </div>
              </ion-card>
            </ion-col>
          } @empty {
            <ion-col size="12" class="ion-text-center">
              <p style="margin-top: 40px; color: #64748b; font-style: italic;">
                No hay capturas registradas. Toque el botón de la cámara para comenzar.
              </p>
            </ion-col>
          }
        </ion-row>
      </ion-grid>

      <!-- Botón Flotante para Capturar -->
      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button (click)="takePhoto()">
          <ion-icon name="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  `
})
export class GalleryPage {
  public photoService = inject(PhotoService);
  private toastController = inject(ToastController);

  // Señal local para el estado del interruptor de calidad
  public isHighDef = signal<boolean>(false);

  constructor() {
    addIcons({ camera, trashOutline, sparkles, flashOffOutline });
  }

  toggleQuality(enabled: boolean): void {
    this.isHighDef.set(enabled);
  }

  async takePhoto(): Promise<void> {
    const result = await this.photoService.takeNewPhoto(this.isHighDef());

    if (!result.success && result.reason === 'permission_denied') {
      await this.showPermissionWarningToast();
    }

    if (!result.success && result.reason === 'storage_full') {
      await this.showStorageFullToast();
    }
  }

  private async showStorageFullToast(): Promise<void> {
    const toast = await this.toastController.create({
      message: 'Almacenamiento lleno. Elimine algunas fotografías o use el Modo Ahorro de Datos.',
      duration: 3500,
      position: 'bottom',
      color: 'warning',
      buttons: [{ text: 'Entendido', role: 'cancel' }]
    });

    await toast.present();
  }

  private async showPermissionWarningToast(): Promise<void> {
    const toast = await this.toastController.create({
      message: 'Permiso denegado. Conceda acceso a la cámara y galería en los ajustes del dispositivo.',
      duration: 3500,
      position: 'bottom',
      color: 'danger',
      buttons: [
        {
          text: 'Entendido',
          role: 'cancel'
        }
      ]
    });

    await toast.present();
  }
}
