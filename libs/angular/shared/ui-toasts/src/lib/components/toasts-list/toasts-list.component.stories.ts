import type { Meta, StoryObj } from '@storybook/angular';
import { ToastsListComponent } from './toasts-list.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ToastsListComponent> = {
  component: ToastsListComponent,
  title: 'ToastsListComponent',
};
export default meta;
type Story = StoryObj<ToastsListComponent>;

export const Primary: Story = {
  args: {
    messages: [],
  },
};

export const Heading: Story = {
  args: {
    messages: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/toasts-list works!/gi)).toBeTruthy();
  },
};
