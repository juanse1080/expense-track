import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ButtonComponent } from './button/button.component'
import { CardComponent } from './card/card.component'
import { FormControlComponent } from './form-control/form-control.component'
import { InputAdornment } from './input-adornment/input-adornment.component'
import { InputBox } from './input-box/input-box.component'
import { InputHelperText } from './input-helper-text/input-helper-text.component'
import { InputLabelComponent } from './input-label/input-label.component'

const exports = [
  ButtonComponent,
  CardComponent,
  FormControlComponent,
  InputLabelComponent,
  InputBox,
  InputHelperText,
  InputAdornment,
]

@NgModule({
  declarations: [],
  imports: [CommonModule, ...exports],
  exports,
})
export class ComponentsModule {}
