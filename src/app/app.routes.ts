import { Routes } from "@angular/router";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { AuthPageComponent } from "./components/auth-page/auth-page.component";
import { authGuard } from "./auth.guard";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    canActivate: [ authGuard ]
  },
  {
    path: 'login',
    component: AuthPageComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  }
]
