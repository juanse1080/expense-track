import { CommonModule } from '@angular/common'
import { Component, HostBinding, Input } from '@angular/core'

import { merge } from '@utils/merge-clsx'
import {
  ButtonInputs,
  buttonSize,
  buttonVariant,
  classes,
} from './button.component.classes'

@Component({
  selector: 'button[et-button]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements ButtonInputs {
  @Input() disabled: boolean = false
  @Input() fullWidth: boolean = false
  @Input() size: buttonSize = 'md'
  @Input() variant: buttonVariant = 'contained'

  @Input() class: string = ''

  @HostBinding('class')
  get hostClasses(): string {
    return merge(classes(this), this.class)
  }
}
