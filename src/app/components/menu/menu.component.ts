import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ImagesUrl } from '../../utils/constants';
import { RouterLink } from '@angular/router';

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
