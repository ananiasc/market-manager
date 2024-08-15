import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { LocalStorageService } from './storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient, 
    private router: Router, 
    private storage: LocalStorageService,
  ) {}

  isAuthenticated(): Observable<boolean> {
    const token = this.storage.getItem('token');
    if (token) {
      return this.http.post<{ valid: boolean }>('/api/validate-token', { token }).pipe(
        map(response => response.valid),
        catchError(() => {
          this.logout();
          return of(false);
        })
      );
    } else {
      this.logout();
      return of(false);
    }
  }

  logout() {
    this.storage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
