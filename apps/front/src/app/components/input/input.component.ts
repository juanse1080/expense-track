import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { merge } from '@utils/merge-clsx';
import { InputBox } from './input-box';

@Component({
  selector: 'et-input',
  standalone: true,
  imports: [CommonModule, InputBox],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input({ required: true }) for!: string;
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;

  @Input() class: string = '';
  @HostBinding('class')
  get hostClasses(): string {
    return merge(this.class);
  }
}
