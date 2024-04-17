import { CommonModule } from '@angular/common'
import { Component, ContentChild, HostBinding, Input } from '@angular/core'
import { InputAdornment } from '@components/input-adornment/input-adornment.component'
import { InputBox } from '@components/input-box/input-box.component'
import { InputControl } from '@components/input-control/input-control.component'
import { InputHelperText } from '@components/input-helper-text/input-helper-text.component'
import { InputLabelComponent } from '@components/input-label/input-label.component'
import { merge } from '@utils/merge-clsx'

@Component({
  selector: 'et-form-control',
  standalone: true,
  host: {
    '(click)': 'this._onClick()',
  },
  imports: [
    CommonModule,
    InputBox,
    InputLabelComponent,
    InputHelperText,
    InputAdornment,
    InputControl,
  ],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlComponent {
  @ContentChild(InputControl) _inputControl: undefined | InputControl

  @Input() disabled: boolean = false
  @Input() type: string = ''

  @Input() class: string = ''
  @HostBinding('class')
  get hostClasses(): string {
    return merge(this.class)
  }

  _onClick() {
    this._inputControl?.onContainerClick()
    console.log(this._inputControl?.focused)
  }
}
