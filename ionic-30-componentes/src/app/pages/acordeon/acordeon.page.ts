import { Component } from '@angular/core';
import {
  IonAccordion,
  IonAccordionGroup,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';

@Component({
  selector: 'app-acordeon',
  templateUrl: 'acordeon.page.html',
  styleUrls: ['acordeon.page.css'],
  imports: [
    IonAccordion,
    IonAccordionGroup,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonTitle,
    IonToolbar,
  ],
})
export class AcordeonPage {}
