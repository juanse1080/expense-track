import { Directive, HostBinding, Input } from '@angular/core'
import { merge } from '@utils/merge-clsx'

@Directive({
  selector: '[et-input-box]',
  standalone: true,
})
export class InputBox {
  @Input() class: string = ''

  @HostBinding('class')
  get hostClasses(): string {
    return merge(
      'ring-0 outline-0 bg-transparent border border-silver placeholder:text-silver text-xs rounded-input inline-flex w-full p-2',
      this.class
    )
  }
}
