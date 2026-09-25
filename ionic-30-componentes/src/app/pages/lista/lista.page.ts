import { Component } from '@angular/core';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: 'lista.page.html',
  styleUrls: ['lista.page.css'],
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar],
})
export class ListaPage {}
