import type { Meta, StoryObj } from '@storybook/angular'
import { LoginComponent } from './login.component'

const meta: Meta<LoginComponent> = {
  component: LoginComponent,
  title: 'LoginComponent',
}
export default meta
type Story = StoryObj<LoginComponent>

export const Primary: Story = {
  args: {},
}
