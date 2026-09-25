import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from '@ionic/angular';
import { LISTA_COMPONENTES, ComponenteInfo } from '../components-list';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [RouterLink, IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar],
})
export class HomePage {
  componentes: ComponenteInfo[] = LISTA_COMPONENTES;

  constructor() {}
}
