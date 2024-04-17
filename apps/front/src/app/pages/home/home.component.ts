import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ComponentsModule } from '@components/components.module'

@Component({
  selector: 'et-home',
  standalone: true,
  imports: [CommonModule, ComponentsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
