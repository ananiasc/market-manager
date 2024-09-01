import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/storage/local-storage.service';
import { StorageKeys } from '../../utils/constants';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [
    TranslateModule,
    ReactiveFormsModule,
  ],
  templateUrl: './auth-page.component.html'
})
export class AuthPageComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private storage: LocalStorageService,
  ) {}

  onSubmit(event: Event) {
    event.preventDefault();
    this.authService.login(this.loginForm.value).subscribe(
      {
        next: loginResponse => {
          if (loginResponse.token) {
            // this.toastr.success('Login realizado com sucesso');
            console.log('Login realizado com sucesso');
            this.storage.setItem(StorageKeys.TOKEN, loginResponse.token);
            this.router.navigate(['/']);
          }
        },
        error: (err) => {
          // this.toastr.error(
          //   'Algo deu errado. Verifique suas credenciais e tente novamente.'
          // );
          console.log(err);
          console.log('Algo deu errado. Verifique suas credenciais e tente novamente.');
        },
        complete: () => {
          // this.loadingService.loadingOff();
        },
      }
    );
  }
}
