import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BaseService } from '../base/base.service';
import { Observable } from 'rxjs';
import { UserDto } from '../../interfaces/user.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private BASEURL = environment.baseUrl;
  
  constructor(
    private base: BaseService,
  ) {}

  findMe(): Observable<UserDto> {
    return this.base.get(this.BASEURL + '/users/me');
  }
}
