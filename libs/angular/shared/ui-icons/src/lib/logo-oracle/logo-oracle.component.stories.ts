import type { Meta, StoryObj } from '@storybook/angular';
import { LogoOracleComponent } from './logo-oracle.component';

const meta: Meta<LogoOracleComponent> = {
  component: LogoOracleComponent,
  title: 'LogoOracleComponent',
};
export default meta;
type Story = StoryObj<LogoOracleComponent>;

export const Primary: Story = {
  args: {},
};
