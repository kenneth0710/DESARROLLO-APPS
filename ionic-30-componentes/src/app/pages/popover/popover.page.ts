import { Component } from '@angular/core';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPopover,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: 'popover.page.html',
  styleUrls: ['popover.page.css'],
  imports: [IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonPopover, IonTitle, IonToolbar],
})
export class PopoverPage {}
