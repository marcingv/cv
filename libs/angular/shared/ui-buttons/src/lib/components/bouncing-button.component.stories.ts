import { argsToTemplate, Meta, StoryObj } from '@storybook/angular';
import { BouncingButtonComponent } from './bouncing-button.component';
import { IconArrowDownTrayComponent } from '@gv-cv/angular-ui-icons';

type BouncingButtonComponentArgs = BouncingButtonComponent & { text?: string };

const meta: Meta<BouncingButtonComponentArgs> = {
  component: BouncingButtonComponent,
  title: 'BouncingButtonComponent',
  args: {
    type: 'primary',
    pingAnimationEnabled: true,
    elevated: true,
    disabled: false,
    title: 'Button title',
    text: 'Bouncing!',
  },
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'warning', 'transparent'],
      control: { type: 'select' },
    },
  },
  render: (args) => ({
    moduleMetadata: {
      imports: [IconArrowDownTrayComponent],
    },
    props: { ...args },
    template: `<gv-cv-bouncing-button ${argsToTemplate(args, {
      exclude: ['text'],
    })}>${args.text}</gv-cv-bouncing-button>`,
  }),
};
export default meta;
type Story = StoryObj<BouncingButtonComponentArgs>;

export const Primary: Story = {
  args: {
    type: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
  },
};

export const Transparent: Story = {
  args: {
    type: 'transparent',
  },
};

export const IconAndText: Story = {
  args: {
    type: 'warning',
    text: '[ PDF ]',
  },
  render: (args) => ({
    moduleMetadata: {
      imports: [IconArrowDownTrayComponent],
    },
    props: { ...args },
    template: `
<gv-cv-bouncing-button ${argsToTemplate(args, { exclude: ['text'] })}>
    <span class="inline-flex flex-col items-center">
        <gv-cv-icon-arrow-down-tray></gv-cv-icon-arrow-down-tray>

        <span class="font-mono text-[0.5rem]">${args.text}</span>
    </span>
</gv-cv-bouncing-button>
`,
  }),
};
