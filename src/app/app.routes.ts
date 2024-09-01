import { Routes } from "@angular/router";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { AuthPageComponent } from "./components/auth-page/auth-page.component";
import { authGuard } from "./auth.guard";

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    canActivate: [ authGuard ]
  },
  {
    path: 'login',
    component: AuthPageComponent,
  }
]
