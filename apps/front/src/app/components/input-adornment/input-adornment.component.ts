import { Directive, HostBinding, Input } from '@angular/core';
import { merge } from '@utils/merge-clsx';

export type positionAdornment = 'start' | 'end';

@Directive({
  selector: '[et-input-adornment]',
  standalone: true,
})
export class InputAdornment {
  @Input() position: positionAdornment = 'end';

  @Input() class: string = '';

  @HostBinding('class')
  get hostClasses(): string {
    console.log(this.position);
    return merge(
      {
        'ml-3': this.position === 'end',
        'mr-3': this.position === 'start',
      },
      this.class
    );
  }
}
