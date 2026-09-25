import { Component } from '@angular/core';
import {
  IonAlert,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';

@Component({
  selector: 'app-alerta',
  templateUrl: 'alerta.page.html',
  styleUrls: ['alerta.page.css'],
  imports: [IonAlert, IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar],
})
export class AlertaPage {
  alertButtons = ['Action'];
}
