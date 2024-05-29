import type { Meta, StoryObj } from '@storybook/angular';
import { LogoUdemyComponent } from './logo-udemy.component';

const meta: Meta<LogoUdemyComponent> = {
  component: LogoUdemyComponent,
  title: 'LogoUdemyComponent',
};
export default meta;
type Story = StoryObj<LogoUdemyComponent>;

export const Primary: Story = {
  args: {},
};
