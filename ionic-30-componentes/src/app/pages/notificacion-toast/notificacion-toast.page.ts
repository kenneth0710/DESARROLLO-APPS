import { Component } from '@angular/core';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToast,
  IonToolbar,
} from '@ionic/angular';

@Component({
  selector: 'app-notificacion-toast',
  templateUrl: 'notificacion-toast.page.html',
  styleUrls: ['notificacion-toast.page.css'],
  imports: [IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToast, IonToolbar],
})
export class NotificacionToastPage {}
