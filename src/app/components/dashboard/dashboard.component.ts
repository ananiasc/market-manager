import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ImagesUrl } from '../../utils/constants';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgIf],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  isCadastroOpen = false;
  isMarketOpen = false;
  img = {
    setting: ImagesUrl.SETTINGS,
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
    userAvatar: ImagesUrl.USER_AVATAR
  }

  toggleMenu(menu: string): void {
    if (menu === 'catalogo') {
      this.isCadastroOpen = !this.isCadastroOpen;
      this.img.toggleCatalog = this.toggleMenuImg(this.isCadastroOpen);
    }
  }

  private toggleMenuImg (isOpen: boolean): string {
    if (isOpen) {
      return this.img.expanded;
    }
    return this.img.closed;
  }
}
