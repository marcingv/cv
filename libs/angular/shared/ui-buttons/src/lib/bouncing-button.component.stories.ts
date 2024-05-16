import type { Meta, StoryObj } from '@storybook/angular';
import { BouncingButtonComponent } from './bouncing-button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<BouncingButtonComponent> = {
  component: BouncingButtonComponent,
  title: 'BouncingButtonComponent',
};
export default meta;
type Story = StoryObj<BouncingButtonComponent>;

export const Primary: Story = {
  args: {
    disabled: false,
    title: '',
    label: '',
  },
};

export const Heading: Story = {
  args: {
    disabled: false,
    title: '',
    label: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/bouncing-button works!/gi)).toBeTruthy();
  },
};
