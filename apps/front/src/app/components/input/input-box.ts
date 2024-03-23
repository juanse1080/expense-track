import { Directive } from '@angular/core';

@Directive({
  selector: '[et-input-box]',
  standalone: true,
  host: {
    class:
      'ring-0 outline-0 bg-transparent border border-silver placeholder:text-silver text-xs rounded-input block w-full p-2',
  },
})
export class InputBox {}
