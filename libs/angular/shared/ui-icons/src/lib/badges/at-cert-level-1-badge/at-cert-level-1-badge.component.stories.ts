import type { Meta, StoryObj } from '@storybook/angular';
import { AtCertLevel1BadgeComponent } from './at-cert-level-1-badge.component';

const meta: Meta<AtCertLevel1BadgeComponent> = {
  component: AtCertLevel1BadgeComponent,
  title: 'AtCertLevel1BadgeComponent',
};
export default meta;
type Story = StoryObj<AtCertLevel1BadgeComponent>;

export const Primary: Story = {
  args: {},
};
