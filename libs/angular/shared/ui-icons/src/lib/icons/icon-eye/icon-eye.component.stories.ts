import type { Meta, StoryObj } from '@storybook/angular';
import { IconEyeComponent } from './icon-eye.component';

const meta: Meta<IconEyeComponent> = {
  component: IconEyeComponent,
  title: 'IconEyeComponent',
};
export default meta;
type Story = StoryObj<IconEyeComponent>;

export const Primary: Story = {
  args: {},
};
