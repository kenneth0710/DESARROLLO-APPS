import { Component } from '@angular/core';
import { IonAvatar, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-avatar',
  templateUrl: 'avatar.page.html',
  styleUrls: ['avatar.page.css'],
  imports: [IonAvatar, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar],
})
export class AvatarPage {}
