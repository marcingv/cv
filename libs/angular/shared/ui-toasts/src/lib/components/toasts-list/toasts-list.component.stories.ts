import type { Meta, StoryObj } from '@storybook/angular';
import { ToastsListComponent } from './toasts-list.component';

const meta: Meta<ToastsListComponent> = {
  component: ToastsListComponent,
  title: 'ToastsListComponent',
};
export default meta;
type Story = StoryObj<ToastsListComponent>;

export const Primary: Story = {
  args: {
    messages: [
      { message: 'Message #1', severity: 'primary' },
      { message: 'Message #2', severity: 'error' },
      { message: 'Message #3', severity: 'error' },
      { message: 'Message #4', severity: 'primary' },
      { message: 'Message #5', severity: 'primary' },
    ],
  },
};
