import { CommonModule } from '@angular/common'
import { Component, HostBinding, Input } from '@angular/core'
import { merge } from '@utils/merge-clsx'

@Component({
  selector: '[et-input-label]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-label.component.html',
  styleUrl: './input-label.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputLabelComponent {
  @Input({ required: true }) for!: string
  @Input() required: boolean = false

  @Input() class: string = ''
  @HostBinding('class')
  get hostClasses(): string {
    return merge(this.class)
  }
}
