import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { InputLabelComponent } from './input-label/input-label.component';
import { InputComponent } from './input/input.component';

const exports = [
  ButtonComponent,
  CardComponent,
  InputComponent,
  InputLabelComponent,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...exports],
  exports,
})
export class ComponentsModule {}
