import type { Meta, StoryObj } from '@storybook/angular';
import { ToastListItemComponent } from './toast-list-item.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ToastListItemComponent> = {
  component: ToastListItemComponent,
  title: 'ToastListItemComponent',
};
export default meta;
type Story = StoryObj<ToastListItemComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/toast-list-item works!/gi)).toBeTruthy();
  },
};
