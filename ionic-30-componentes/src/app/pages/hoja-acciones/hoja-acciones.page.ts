import { Component } from '@angular/core';
import {
  IonActionSheet,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';

@Component({
  selector: 'app-hoja-acciones',
  templateUrl: 'hoja-acciones.page.html',
  styleUrls: ['hoja-acciones.page.css'],
  imports: [IonActionSheet, IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar],
})
export class HojaAccionesPage {
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
}
