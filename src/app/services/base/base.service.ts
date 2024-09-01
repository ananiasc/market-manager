import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageKeys } from '../../utils/constants';
import { LocalStorageService } from '../storage/local-storage.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(
    public http: HttpClient,
    private storage: LocalStorageService,
  ) { }

  getToken() {
    let token = this.storage.getItem(StorageKeys.TOKEN);

    if (token) {
      return {
        headers: new HttpHeaders()
          .set('Authorization', `Bearer ${token}`)
          .set('Content-Type', 'application/json;charset=UTF-8')
      };
    }
    return {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json;charset=UTF-8')
    };
  }

  public get(endpoint: string, options?: object): Observable<any> {
    const authToken = this.getToken();
    return this.http
      .get(endpoint, {
        ...authToken,
        ...options,
      })
      .pipe(map((res: any) => (res ? Object.assign(res) : '')));
  }

  public post(endpoint: string, body: any, options?: object): Observable<any> {
    const authToken = this.getToken();
    return this.http
      .post(endpoint, body, {
        ...authToken,
        ...options,
      })
      .pipe(map((res: any) => (res ? Object.assign(res) : '')));
  }

  public put(endpoint: string, body: any, options?: object): Observable<any> {
    const authToken = this.getToken();
    return this.http
      .put(endpoint, body, {
        ...authToken,
        ...options,
      })
      .pipe(map((res: any) => (res ? Object.assign(res) : '')));
  }

  public delete(endpoint: string, options?: object): Observable<any> {
    const authToken = this.getToken();
    return this.http
      .delete(endpoint, {
        ...authToken,
        ...options,
      })
      .pipe(map((res: any) => (res ? Object.assign(res) : '')));
  }

  public options(endpoint: string, options?: object): Observable<any> {
    const authToken = this.getToken();
    return this.http
      .options(endpoint, {
        ...authToken,
        ...options,
      })
      .pipe(map((res: any) => (res ? Object.assign(res) : '')));
  }
}
