import { Directive, HostBinding, Input } from '@angular/core'
import { merge } from '@utils/merge-clsx'

@Directive({
  selector: '[et-input-helper-text]',
  standalone: true,
})
export class InputHelperText {
  @Input() class: string = ''

  @HostBinding('class')
  get hostClasses(): string {
    return merge(
      'mt-1 mx-2 block text-sm font-medium text-gray-900',
      this.class
    )
  }
}
