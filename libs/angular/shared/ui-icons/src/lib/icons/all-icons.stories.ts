import type { Meta, StoryObj } from '@storybook/angular';
import { IconArrowDownTrayComponent } from './icon-arrow-down-tray';
import { IconEyeComponent } from './icon-eye';
import { IconEyeSlashComponent } from './icon-eye-slash';
import { IconLoadingComponent } from './icon-loading';
import { BaseIconComponent } from './base-icon.component';

type AllIconsComponentArgs = BaseIconComponent & {
  color: string;
  size: string;
};

const meta: Meta<AllIconsComponentArgs> = {
  component: BaseIconComponent,
  title: 'All Icons',
  args: {
    color: 'text-slate-700',
    size: 'size-4',
    strokeWidth: 1.5,
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
      options: ['size-4', 'size-8', 'size-12', 'size-16'],
      control: { type: 'radio' },
    },
    strokeWidth: {
      options: [1, 1.5, 2, 2.5, 3],
      control: { type: 'radio' },
    },
  },
  render: (args) => ({
    moduleMetadata: {
      imports: [
        IconArrowDownTrayComponent,
        IconEyeComponent,
        IconEyeSlashComponent,
        IconLoadingComponent,
      ],
    },
    props: { ...args },
    template: `
<div class="flex flex-row flex-wrap gap-4 ${args.color}">
    <gv-cv-icon-arrow-down-tray cssClass="${args.size}" strokeWidth="${args.strokeWidth}"></gv-cv-icon-arrow-down-tray>
    <gv-cv-icon-eye cssClass="${args.size}" strokeWidth="${args.strokeWidth}"></gv-cv-icon-eye>
    <gv-cv-icon-eye-slash cssClass="${args.size}" strokeWidth="${args.strokeWidth}"></gv-cv-icon-eye-slash>
    <gv-cv-icon-loading cssClass="${args.size}" strokeWidth="${args.strokeWidth}"></gv-cv-icon-loading>
</div>
`,
  }),
};
export default meta;

type Story = StoryObj<BaseIconComponent>;

export const Primary: Story = {
  args: {},
};
