import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { LocalStorageService } from '../storage/local-storage.service';
import { StorageKeys } from '../../utils/constants';
import { environment } from '../../environments/environment';
import { UserLogin } from '../../interfaces/user-login';
import { LoginResponseDTO } from '../../interfaces/login-response.dto';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASEURL = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private router: Router,
    private storage: LocalStorageService,
    private base: BaseService,
  ) {}

  isAuthenticated(): Observable<boolean> {
    const token = this.storage.getItem(StorageKeys.TOKEN);
    if (token) {
      return this.base.post(this.BASEURL + '/auth/validate-token', null).pipe(
        map(response => {
          return true;
        }),
        catchError(() => {
          this.logout();
          return of(false);
        })
      );
    }else {
      this.logout();
      return of(false);
    }
  }

  login(userLogin: UserLogin): Observable<LoginResponseDTO> {
    return this.base.post(this.BASEURL + '/auth', userLogin);
  }

  logout() {
    this.storage.removeItem(StorageKeys.TOKEN);
    this.router.navigate(['/login']);
  }
}
