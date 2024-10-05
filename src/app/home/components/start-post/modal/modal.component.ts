import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {
  IonText,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonAvatar,
  IonImg,
  IonTextarea,
} from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [
    IonTextarea,
    IonImg,
    IonAvatar,
    IonCol,
    IonRow,
    IonGrid,
    IonIcon,
    IonButton,
    IonText,
    FormsModule,
  ],
})
export class ModalComponent implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  @ViewChild('form') form?: NgForm;

  ngOnInit() {}

  onPost() {
    console.log('onPost');
    if (!this.form?.valid) return;

    const body = this.form?.value['body'];
    this.modalCtrl.dismiss(
      {
        post: {
          body,
          createdAt: new Date(),
        },
      },
      'post'
    );
  }

  onDismiss() {
    this.modalCtrl.dismiss(null, 'dismiss');
  }
}
