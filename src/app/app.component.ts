import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        MenuComponent,
        HeaderComponent,
    ],
    templateUrl: './app.component.html'
})
export class AppComponent {
}
