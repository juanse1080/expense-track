import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ComponentsModule } from '@components/components.module'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ComponentsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
