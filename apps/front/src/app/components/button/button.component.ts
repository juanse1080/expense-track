import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';

import {
  ButtonInputs,
  buttonSize,
  buttonVariant,
  classes,
} from './button.component.classes';

@Component({
  selector: 'et-button',
  host: {
    role: 'button',
    class: 'inline-block',
    '[class.w-full]': 'fullWidth',
    disabled: 'disabled',
  },
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements ButtonInputs, OnChanges {
  classes = {};

  @Input() disabled: boolean = false;
  @Input() fullWidth: boolean = false;
  @Input() size: buttonSize = 'md';
  @Input() variant: buttonVariant = 'contained';

  ngOnChanges(): void {
    this.classes = classes(this);
  }
}
