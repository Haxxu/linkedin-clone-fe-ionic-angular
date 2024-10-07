import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonText,
  IonIcon,
  IonCard,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonInput,
    IonLabel,
    IonItem,
    IonCard,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonText,
    IonIcon,
  ],
})
export class AuthPage implements OnInit {
  @ViewChild('form') form?: NgForm;

  submissionType: 'login' | 'join' = 'login';

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    const { email, password } = this.form?.value;
    if (!email || !password) return;

    if (this.submissionType === 'login') {
      console.log('handle login', { email, password });
    } else if (this.submissionType === 'join') {
      const { firstName, lastName } = this.form?.value;
      if (!firstName || lastName) return;
      console.log('handle sign in', { email, password, firstName, lastName });
    }
  }

  toggleText() {
    if (this.submissionType === 'login') {
      this.submissionType = 'join';
    } else if (this.submissionType === 'join') {
      this.submissionType = 'login';
    }
  }
}
