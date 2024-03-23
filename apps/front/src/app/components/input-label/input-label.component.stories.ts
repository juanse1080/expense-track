import type { Meta } from '@storybook/angular';
import { withNgContent } from '@utils/storybook';
import { InputLabelComponent } from './input-label.component';

const meta: Meta<InputLabelComponent> = {
  component: InputLabelComponent,
  title: 'InputLabelComponent',
};
export default meta;

const inputLabelWithNgContent = withNgContent<InputLabelComponent>(
  'label',
  'Holaaaaa',
  { attrs: 'et-input-label' }
);

export const Basic = inputLabelWithNgContent({
  args: {
    required: true,
  },
});
