import { Component, inject, OnInit } from '@angular/core';
import {
  IonCard,
  IonCardHeader,
  IonAvatar,
  IonImg,
  IonButton,
  IonCardContent,
  IonIcon,
  IonText,
} from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-start-post',
  templateUrl: './start-post.component.html',
  styleUrls: ['./start-post.component.scss'],
  standalone: true,
  imports: [
    IonText,
    IonIcon,
    IonCardContent,
    IonButton,
    IonImg,
    IonAvatar,
    IonCardHeader,
    IonCard,
  ],
  providers: [ModalController],
})
export class StartPostComponent implements OnInit {
  message =
    'This modal example uses the modalController to present and dismiss modals.';

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      cssClass: 'my-custom-modal',
    });
    await modal.present();

    const { data, role } = await modal.onWillDismiss();

    console.log('role: ', role, '; data: ', data);

    if (data) {
      console.log('Data exists!');
    }

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }
  }
}
