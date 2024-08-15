import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [
    TranslateModule,
  ],
  templateUrl: './auth-page.component.html'
})
export class AuthPageComponent {

}
