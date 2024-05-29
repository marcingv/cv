import type { Meta, StoryObj } from '@storybook/angular';
import { LogoAngularTrainingComponent } from './logo-angular-training.component';

const meta: Meta<LogoAngularTrainingComponent> = {
  component: LogoAngularTrainingComponent,
  title: 'LogoAngularTrainingComponent',
};
export default meta;
type Story = StoryObj<LogoAngularTrainingComponent>;

export const Primary: Story = {
  args: {},
};
