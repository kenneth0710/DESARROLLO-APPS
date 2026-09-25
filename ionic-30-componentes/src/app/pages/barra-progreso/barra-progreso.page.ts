import { Component, signal } from '@angular/core';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonProgressBar, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-barra-progreso',
  templateUrl: 'barra-progreso.page.html',
  styleUrls: ['barra-progreso.page.css'],
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonProgressBar, IonTitle, IonToolbar],
})
export class BarraProgresoPage {
  readonly progress = signal(0);

  constructor() {
    setInterval(() => {
      this.progress.update((value) => value + 0.01);

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress() > 1) {
        setTimeout(() => {
          this.progress.set(0);
        }, 1000);
      }
    }, 50);
  }
}
