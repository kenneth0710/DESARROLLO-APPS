import { Component } from '@angular/core';
import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';

@Component({
  selector: 'app-cuadricula',
  templateUrl: 'cuadricula.page.html',
  styleUrls: ['cuadricula.page.css'],
  imports: [IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonRow, IonTitle, IonToolbar],
})
export class CuadriculaPage {}
