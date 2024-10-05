import { Component, OnInit } from '@angular/core';
import {
  IonCard,
  IonCardHeader,
  IonAvatar,
  IonImg,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonText,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.scss'],
  standalone: true,
  imports: [
    IonText,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonImg,
    IonAvatar,
    IonCardHeader,
    IonCard,
  ],
})
export class ProfileSummaryComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
