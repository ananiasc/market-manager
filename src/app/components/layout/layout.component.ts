import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    MenuComponent,
    HeaderComponent,
  ],
  templateUrl: './layout.component.html'
})
export class LayoutComponent {

}
