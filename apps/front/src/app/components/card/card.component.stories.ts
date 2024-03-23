import type { Meta } from '@storybook/angular';
import { withNgContent } from '@utils/storybook';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  component: CardComponent,
  title: 'CardComponent',
};
export default meta;

const cardWithNgContent = withNgContent<CardComponent>('et-card', 'Card');

export const Basic = cardWithNgContent({
  args: {},
});
