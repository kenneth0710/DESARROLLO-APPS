import { Component } from '@angular/core';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonRadio,
  IonRadioGroup,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';

@Component({
  selector: 'app-radio',
  templateUrl: 'radio.page.html',
  styleUrls: ['radio.page.css'],
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonRadio, IonRadioGroup, IonTitle, IonToolbar],
})
export class RadioPage {}
