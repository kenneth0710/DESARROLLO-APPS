import { Component } from '@angular/core';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonLoading,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';

@Component({
  selector: 'app-indicador-carga',
  templateUrl: 'indicador-carga.page.html',
  styleUrls: ['indicador-carga.page.css'],
  imports: [IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonLoading, IonTitle, IonToolbar],
})
export class IndicadorCargaPage {}
