import { Component } from '@angular/core';
import { IonBackButton, IonButtons, IonChip, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-chip',
  templateUrl: 'chip.page.html',
  styleUrls: ['chip.page.css'],
  imports: [IonBackButton, IonButtons, IonChip, IonContent, IonHeader, IonTitle, IonToolbar],
})
export class ChipPage {}
