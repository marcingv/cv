import type { Meta, StoryObj } from '@storybook/angular';
import { BaseLogoComponent } from './base-logo.component';
import { LogoOracleComponent } from './logo-oracle';
import { LogoUdemyComponent } from './logo-udemy';
import { LogoAngularTrainingComponent } from './logo-angular-training';

type AllLogosComponentArgs = BaseLogoComponent & {
  color: string;
  size: string;
};

const meta: Meta<AllLogosComponentArgs> = {
  component: BaseLogoComponent,
  title: 'All Logos',
  args: {
    color: 'text-slate-700',
    size: 'h-4',
  },
  argTypes: {
    color: {
      options: [
        'text-slate-700',
        'text-red-500',
        'text-orange-500',
        'text-green-500',
      ],
      control: { type: 'radio' },
    },
    size: {
      options: ['h-4', 'h-8', 'h-12', 'h-16'],
      control: { type: 'radio' },
    },
  },
  render: (args) => ({
    moduleMetadata: {
      imports: [
        LogoOracleComponent,
        LogoUdemyComponent,
        LogoAngularTrainingComponent,
      ],
    },
    props: { ...args },
    template: `
<div class="flex flex-col items-center flex-wrap gap-8 ${args.color}">
       <gv-cv-logo-oracle cssClass="${args.size}"></gv-cv-logo-oracle>
       <gv-cv-logo-udemy cssClass="${args.size}"></gv-cv-logo-udemy>
       <gv-cv-logo-angular-training cssClass="${args.size}"></gv-cv-logo-angular-training>
</div>
`,
  }),
};
export default meta;

type Story = StoryObj<BaseLogoComponent>;

export const Primary: Story = {
  args: {},
};
