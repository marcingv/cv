import type { Meta, StoryObj } from '@storybook/angular';
import { MadeByGdeBadgeComponent } from './made-by-gde-badge.component';

const meta: Meta<MadeByGdeBadgeComponent> = {
  component: MadeByGdeBadgeComponent,
  title: 'MadeByGdeBadgeComponent',
};
export default meta;
type Story = StoryObj<MadeByGdeBadgeComponent>;

export const Primary: Story = {
  args: {},
};
