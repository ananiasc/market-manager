import { Routes } from "@angular/router";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { AuthPageComponent } from "./components/auth-page/auth-page.component";
import { authGuard } from "./auth.guard";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LayoutComponent } from "./components/layout/layout.component";

export const routes: Routes = [
  {
    path: 'login',
    component: AuthPageComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [ authGuard ],
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ]
  }
]
