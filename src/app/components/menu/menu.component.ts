import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ImagesUrl } from '../../utils/constants';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { UserDto } from '../../interfaces/user.dto';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NgIf, 
    RouterLink
  ],
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  isCatalogOpen = false;
  isMarketOpen = false;
  user: UserDto = {
    active: false,
    email: '',
    id: -1,
    lastName: '',
    name: '',
    phoneNumber: '',
    role: '',
    username: '',
  };

  img = {
    settings: ImagesUrl.SETTINGS,
    users: ImagesUrl.USERS,
    products: ImagesUrl.PRODUCTS,
    clients: ImagesUrl.CLIENTS,
    sales: ImagesUrl.SALES,
    catalog: ImagesUrl.CATALOG,
    closed: ImagesUrl.MENU_CLOSED,
    expanded: ImagesUrl.MENU_EXPANDED,
    toggleCatalog: ImagesUrl.MENU_CLOSED,
    brands: ImagesUrl.BRANDS,
    categories: ImagesUrl.CATEGORIES,
    userAvatar: ImagesUrl.USER_AVATAR,
    promotions: ImagesUrl.PROMOTIONS,
    dashboard: ImagesUrl.DASHBOARD,
  }

  constructor(
    private userService: UserService,
  ) {
    this.findMe();
  }

  private findMe() {
    this.userService
    .findMe()
    .subscribe(
      {
        next: userDto => {
          this.user = userDto;
        },
        error: (err) => {
          console.log(err);
          console.log('Algo deu errado. Tente novamente mais tarde.');
        },
        complete: () => {},
      }
    );
  }

  toggleMenu(menu: string): void {
    if (menu === 'catalogo') {
      this.isCatalogOpen = !this.isCatalogOpen;
      this.img.toggleCatalog = this.toggleMenuImg(this.isCatalogOpen);
    }
  }

  private toggleMenuImg (isOpen: boolean): string {
    if (isOpen) {
      return this.img.expanded;
    }
    return this.img.closed;
  }
}
