import { Component } from '@angular/core';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  RefresherCustomEvent,
} from '@ionic/angular';

@Component({
  selector: 'app-actualizar',
  templateUrl: 'actualizar.page.html',
  styleUrls: ['actualizar.page.css'],
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonRefresher, IonRefresherContent, IonTitle, IonToolbar],
})
export class ActualizarPage {
  handleRefresh(event: RefresherCustomEvent) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
}
