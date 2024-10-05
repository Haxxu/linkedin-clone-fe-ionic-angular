import { Component, OnInit } from '@angular/core';
import {
  IonCard,
  IonCardHeader,
  IonText,
  IonIcon,
  IonButton,
  IonCardContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-advertising',
  templateUrl: './advertising.component.html',
  styleUrls: ['./advertising.component.scss'],
  standalone: true,
  imports: [
    IonCardContent,
    IonButton,
    IonIcon,
    IonText,
    IonCardHeader,
    IonCard,
  ],
})
export class AdvertisingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
