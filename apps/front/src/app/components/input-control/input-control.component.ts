import { Directive, ElementRef, Input } from '@angular/core'

let nextUniqueId = 0

@Directive({
  selector: 'input[et-input-control], textarea[et-input-control]',
  host: {
    '[id]': 'id',
    '[disabled]': 'disabled',
    '[required]': 'required',
    '[attr.name]': 'name || null',
    '[attr.readonly]': 'readonly',
    '[attr.aria-required]': 'required',
    '(focus)': '_focusChanged(true)',
    '(click)': 'focus({})',
    '(blur)': '_focusChanged(false)',
    '(input)': '_onInput()',
  },
  standalone: true,
})
export class InputControl {
  public focused: boolean = false
  protected _uid = `et-input-control-${nextUniqueId++}`

  @Input() name: string = ''
  @Input() placeholder?: string
  @Input() disabled: boolean = false
  @Input() required: boolean = false
  @Input() readonly: boolean = false

  @Input()
  get id(): string {
    return this._id
  }
  set id(value: string) {
    this._id = value || this._uid
  }
  protected _id: string = ''

  @Input()
  get type(): string {
    return this._type
  }
  set type(value: string) {
    this._type = value || 'text'
  }
  protected _type = 'text'

  constructor(
    protected readonly _elementRef: ElementRef<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {}

  onContainerClick() {
    if (!this.focused) {
      this.focus()
    }
  }

  focus(options?: FocusOptions): void {
    console.log(this._elementRef.nativeElement)
    this._elementRef.nativeElement.focus(options)
  }

  /** Callback for the cases where the focused state of the input changes. */
  _focusChanged(isFocused: boolean) {
    if (isFocused !== this.focused) {
      this.focused = isFocused
    }
  }

  _onInput() {}
}
