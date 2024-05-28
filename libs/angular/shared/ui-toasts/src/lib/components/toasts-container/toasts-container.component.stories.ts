import type { Meta, StoryObj } from '@storybook/angular';
import { ToastsContainerComponent } from './toasts-container.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ToastsContainerComponent> = {
  component: ToastsContainerComponent,
  title: 'ToastsContainerComponent',
};
export default meta;
type Story = StoryObj<ToastsContainerComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/toasts-container works!/gi)).toBeTruthy();
  },
};
