import { Route } from '@angular/router'
import { HomeComponent } from '@pages/home/home.component'
import { LoginComponent } from '@pages/login/login.component'

export const appRoutes: Route[] = [
  {
    path: 'sign-in',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
]
