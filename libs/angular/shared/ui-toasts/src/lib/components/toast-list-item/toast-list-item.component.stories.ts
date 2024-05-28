import type { Meta, StoryObj } from '@storybook/angular';
import { ToastListItemComponent } from './toast-list-item.component';

const meta: Meta<ToastListItemComponent> = {
  component: ToastListItemComponent,
  title: 'ToastListItemComponent',
  args: {
    toast: { message: 'Sample message!', severity: 'primary' },
  },
  parameters: {
    layout: 'centered',
  },
};
export default meta;
type Story = StoryObj<ToastListItemComponent>;

export const Primary: Story = {
  args: {
    toast: { message: 'Sample message!', severity: 'primary' },
  },
};

export const Error: Story = {
  args: {
    toast: { message: 'Sample message!', severity: 'error' },
  },
};
