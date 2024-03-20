import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

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
export class ButtonComponent {
  @Input() disabled: boolean = false;
  @Input() fullWidth: boolean = false;
  @Input() class: string = '';
}
