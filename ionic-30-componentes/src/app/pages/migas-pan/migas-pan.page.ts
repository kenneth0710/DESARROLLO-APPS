import { Component } from '@angular/core';
import {
  IonBackButton,
  IonBreadcrumb,
  IonBreadcrumbs,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';

@Component({
  selector: 'app-migas-pan',
  templateUrl: 'migas-pan.page.html',
  styleUrls: ['migas-pan.page.css'],
  imports: [IonBackButton, IonBreadcrumb, IonBreadcrumbs, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar],
})
export class MigasPanPage {}
