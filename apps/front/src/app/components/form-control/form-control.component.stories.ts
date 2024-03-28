import { CommonModule } from '@angular/common';
import { InputAdornment } from '@components/input-adornment/input-adornment.component';
import { InputBox } from '@components/input-box/input-box.component';
import { InputControl } from '@components/input-control/input-control.component';
import { InputHelperText } from '@components/input-helper-text/input-helper-text.component';
import { InputLabelComponent } from '@components/input-label/input-label.component';
import {
  StoryObj,
  argsToTemplate,
  moduleMetadata,
  type Meta,
} from '@storybook/angular';
import { FormControlComponent } from './form-control.component';

type FormControlAttrs = FormControlComponent & { content?: string };

const meta: Meta<FormControlAttrs> = {
  component: FormControlComponent,
  title: 'FormControlComponent',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        InputLabelComponent,
        InputBox,
        InputHelperText,
        InputAdornment,
        InputControl,
      ],
    }),
  ],
  render: ({ content, ...args }: FormControlAttrs) => ({
    props: {
      ...args,
    },
    template: `
      <et-form-control ${argsToTemplate(args)}>
        ${content}
      </et-form-control>
    `,
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<FormControlAttrs>;

export const Default: Story = {
  args: {
    content: `
      <span et-input-label for="basic">Holaaaaa</span>
      <input et-input-control id="basic" type="text">
    `,
  },
};

export const Required: Story = {
  args: {
    content: `
      <span et-input-label for="required" [required]="true">Holaaaaa</span>
      <input et-input-control id="required" type="text">
    `,
  },
};

export const Placeholder: Story = {
  args: {
    content: `
      <span et-input-label for="placeholder" >Holaaaaa</span>
      <input et-input-control id="placeholder" type="text" placeholder="hola">
    `,
  },
};

export const HelperText: Story = {
  args: {
    content: `
      <span et-input-label for="helper-text" >Holaaaaa</span>
      <input et-input-control id="helper-text" type="text">
      <span et-input-helper-text>Holaaaaa</span>
    `,
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    content: `
      <span et-input-label for="placeholder" >Holaaaaa</span>
      <input et-input-control id="placeholder" type="password" placeholder="****">
    `,
  },
};
