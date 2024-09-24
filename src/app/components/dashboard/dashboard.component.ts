import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgIf],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  isCadastroOpen = false;
  isMarketOpen = false;

  toggleMenu(menu: string): void {
    if (menu === 'cadastro') {
      this.isCadastroOpen = !this.isCadastroOpen;
    } else if (menu === 'market') {
      this.isMarketOpen = !this.isMarketOpen;
    }
  }
}
