import { Component, OnInit } from '@angular/core';
import {
  InfiniteScrollCustomEvent,
  IonAvatar,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';

@Component({
  selector: 'app-desplazamiento-infinito',
  templateUrl: 'desplazamiento-infinito.page.html',
  styleUrls: ['desplazamiento-infinito.page.css'],
  imports: [
    IonAvatar,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonItem,
    IonLabel,
    IonList,
    IonTitle,
    IonToolbar,
  ],
})
export class DesplazamientoInfinitoPage implements OnInit {
  items: string[] = [];

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.generateItems();
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }
}
