import { Component, OnInit } from '@angular/core';
import {
  IonToolbar,
  IonHeader,
  IonButtons,
  IonButton,
  IonIcon,
  IonSearchbar,
  IonGrid,
  IonRow,
  IonCol,
  IonBadge,
  IonAvatar,
  IonImg,
  IonPopover,
  IonContent,
} from '@ionic/angular/standalone';
import { PopoverController } from '@ionic/angular';

import { PopoverComponent } from './popover/popover.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    IonToolbar,
    IonHeader,
    IonButtons,
    IonButton,
    IonIcon,
    IonSearchbar,
    IonGrid,
    IonRow,
    IonCol,
    IonBadge,
    IonAvatar,
    IonImg,
    IonPopover,
    IonContent,
  ],
  providers: [PopoverController],
})
export class HeaderComponent implements OnInit {
  constructor(public popoverController: PopoverController) {}

  ngOnInit() {}

  async presentPopover(e: Event) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: e,
      showBackdrop: false,
      cssClass: 'my-custom-popover',
    });

    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log(`Popover dismissed with role: ${role}`);
  }
}
