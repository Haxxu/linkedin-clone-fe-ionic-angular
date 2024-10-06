import { Component, OnInit } from '@angular/core';
import {
  IonToolbar,
  IonTabs,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonBadge,
  IonText,
} from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../start-post/modal/modal.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [
    IonText,
    IonBadge,
    IonIcon,
    IonTabButton,
    IonTabBar,
    IonTab,
    IonTabs,
    IonToolbar,
  ],
  providers: [ModalController],
})
export class TabsComponent implements OnInit {
  constructor(private modalCtrl: ModalController) {}
  message =
    'This modal example uses the modalController to present and dismiss modals.';

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
