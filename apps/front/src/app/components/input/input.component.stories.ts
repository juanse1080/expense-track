import type { Meta } from '@storybook/angular';
import { withNgContent } from '@utils/storybook';
import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: 'InputComponent',
  argTypes: {
    for: {
      control: { type: 'text' },
    },
    required: {
      control: { type: 'boolean' },
    },
  },
};
export default meta;

export const Basic = withNgContent<InputComponent>(
  'et-input',
  `
    <label et-input-label>Holaaaaa</label>
    <input et-input-control id="basic" type="text">
  `
)({
  args: {
    for: 'basic',
  },
});

export const Required = withNgContent<InputComponent>(
  'et-input',
  `
    <label [required]="true" et-input-label>Holaaaaa</label>
    <input et-input-control id="basic" type="text">
  `
)({
  args: {
    for: 'basic',
    required: true,
  },
});

export const Placeholder = withNgContent<InputComponent>(
  'et-input',
  `
    <label et-input-label>Holaaaaa</label>
    <input et-input-control id="placeholder" type="text" placeholder="hola">
  `
)({
  args: {
    for: 'placeholder',
  },
});

export const HelperText = withNgContent<InputComponent>(
  'et-input',
  `
    <label et-input-label>Holaaaaa</label>
    <input et-input-control id="helper-text" type="text">
    <span et-input-helper-text>Holaaaaa</span>
  `
)({
  args: {
    for: 'helper-text',
  },
});
