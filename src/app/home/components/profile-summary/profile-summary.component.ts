import { Component, inject, OnInit } from '@angular/core';
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
import { take } from 'rxjs';
import { Role } from 'src/app/auth/models/user.model';
import { AuthService } from 'src/app/auth/services/auth.service';

type BannerColors = {
  colorOne: string;
  colorTwo: string;
  colorThree: string;
};

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

  private authService = inject(AuthService);

  ngOnInit() {
    // this.authService
    //   .getUserRole()
    //   .pipe(take(1))
    //   .subscribe((role: Role) => {
    //   });
  }
}
