import type { Meta, StoryObj } from '@storybook/angular';
import { BaseImageBadgeComponent } from './base-image-badge-component';
import { AtCertLevel1BadgeComponent } from './at-cert-level-1-badge/at-cert-level-1-badge.component';
import { AtCertLevel2BadgeComponent } from './at-cert-level-2-badge/at-cert-level-2-badge.component';
import { AtCertLevel3BadgeComponent } from './at-cert-level-3-badge/at-cert-level-3-badge.component';
import { MadeByGdeBadgeComponent } from './made-by-gde-badge/made-by-gde-badge.component';

type AllBadgesComponentArgs = BaseImageBadgeComponent & {
  size: string;
};

const meta: Meta<AllBadgesComponentArgs> = {
  component: BaseImageBadgeComponent,
  title: 'All Badges',
  args: {
    size: 'h-48',
  },
  argTypes: {
    size: {
      options: [
        'h-4',
        'h-8',
        'h-12',
        'h-16',
        'h-24',
        'h-36',
        'h-48',
        'h-56',
        'h-64',
        'h-72',
        'h-96',
      ],
      control: { type: 'radio' },
    },
  },
  render: (args) => ({
    moduleMetadata: {
      imports: [
        AtCertLevel1BadgeComponent,
        AtCertLevel2BadgeComponent,
        AtCertLevel3BadgeComponent,
        MadeByGdeBadgeComponent,
      ],
    },
    props: { ...args },
    template: `
<div class="flex flex-col items-center flex-wrap gap-1">
       <gv-cv-at-cert-level-1-badge class="${args.size}"></gv-cv-at-cert-level-1-badge>
       <gv-cv-at-cert-level-2-badge class="${args.size}"></gv-cv-at-cert-level-2-badge>
       <gv-cv-at-cert-level-3-badge class="${args.size}"></gv-cv-at-cert-level-3-badge>
       <gv-cv-made-by-gde-badge class="${args.size}"></gv-cv-made-by-gde-badge>
</div>
`,
  }),
};
export default meta;

type Story = StoryObj<AllBadgesComponentArgs>;

export const Primary: Story = {
  args: {},
};
