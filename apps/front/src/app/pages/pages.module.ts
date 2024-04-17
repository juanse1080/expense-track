import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'

const exports = [HomeComponent, LoginComponent]

@NgModule({
  declarations: [],
  imports: [CommonModule, ...exports],
  exports,
})
export class PagesModule {}
