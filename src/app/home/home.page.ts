import { Component } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [HeaderComponent],
})
export class HomePage {
  constructor() {}
}
