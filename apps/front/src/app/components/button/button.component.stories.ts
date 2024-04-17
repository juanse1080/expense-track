import type { Meta } from '@storybook/angular'
import { withNgContent } from '@utils/storybook'
import { ButtonComponent } from './button.component'

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'ButtonComponent',
  argTypes: {
    variant: {
      options: ['text', 'contained', 'outlined'],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}
export default meta

const buttonWithNgContent = withNgContent<ButtonComponent>(
  'button',
  'Holaaaaa',
  { attrs: 'et-button' }
)

export const Basic = buttonWithNgContent({
  args: {
    variant: 'contained',
  },
})

export const Text = buttonWithNgContent({
  args: {
    variant: 'text',
  },
})

export const Outlined = buttonWithNgContent({
  args: {
    variant: 'outlined',
  },
})

export const Small = buttonWithNgContent({
  args: {
    size: 'sm',
  },
})

export const Medium = buttonWithNgContent({
  args: {
    size: 'md',
  },
})

export const Large = buttonWithNgContent({
  args: {
    size: 'lg',
  },
})

export const FullWidth = buttonWithNgContent({
  args: {
    fullWidth: true,
  },
})

export const Disabled = buttonWithNgContent({
  args: {
    disabled: true,
  },
})
