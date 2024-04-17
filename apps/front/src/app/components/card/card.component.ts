import { CommonModule } from '@angular/common'
import { Component, HostBinding, Input } from '@angular/core'
import { twMerge } from 'tailwind-merge'

@Component({
  selector: 'et-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() class: string = ''

  @HostBinding('class')
  get hostClasses(): string {
    return twMerge('rounded-lg bg-white p-5', this.class)
  }
}
