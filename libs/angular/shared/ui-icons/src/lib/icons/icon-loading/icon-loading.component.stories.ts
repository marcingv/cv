import type { Meta, StoryObj } from '@storybook/angular';
import { IconLoadingComponent } from './icon-loading.component';

const meta: Meta<IconLoadingComponent> = {
  component: IconLoadingComponent,
  title: 'IconLoadingComponent',
};
export default meta;
type Story = StoryObj<IconLoadingComponent>;

export const Primary: Story = {
  args: {},
};
