import { argsToTemplate, Meta, StoryObj } from '@storybook/angular';
import { ButtonDirective } from './button.directive';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { IconEyeComponent } from '@gv-cv/angular-ui-icons';

type ButtonDirectiveArgs = ButtonDirective & {
  text?: string;
  disabled?: boolean;
};

const meta: Meta<ButtonDirectiveArgs> = {
  component: ButtonDirective,
  title: 'ButtonDirective',
  args: {
    gvCvButton: 'primary',
    text: 'My Button',
    elevated: false,
    disabled: false,
  },
  argTypes: {
    gvCvButton: {
      options: ['primary', 'secondary', 'warning', 'transparent'],
      control: { type: 'select' },
    },
  },
  render: (args) => ({
    moduleMetadata: {
      imports: [ButtonDirective, IconEyeComponent],
      schemas: [NO_ERRORS_SCHEMA],
    },
    props: { ...args },
    template: `
<button ${argsToTemplate(args, { exclude: ['text'] })} class="gap-3 !px-4">
    ${args.text}
</button>
`,
  }),
};

export default meta;

type Story = StoryObj<ButtonDirectiveArgs>;

export const Primary: Story = {
  args: {
    gvCvButton: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    gvCvButton: 'secondary',
  },
};

export const Warning: Story = {
  args: {
    gvCvButton: 'warning',
  },
};

export const Transparent: Story = {
  args: {
    gvCvButton: 'transparent',
  },
};

export const LinkAsAButton: Story = {
  args: {
    text: 'This link looks like a button!',
  },
  argTypes: {
    disabled: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => ({
    moduleMetadata: {
      imports: [ButtonDirective, IconEyeComponent],
      schemas: [NO_ERRORS_SCHEMA],
    },
    props: { ...args },
    template: `
<a href="javascript:false" ${argsToTemplate(args, {
      exclude: ['text', 'disabled'],
    })}>
    ${args.text}
</a>
`,
  }),
};

export const ButtonWithIcon: Story = {
  render: (args) => ({
    moduleMetadata: {
      imports: [ButtonDirective, IconEyeComponent],
      schemas: [NO_ERRORS_SCHEMA],
    },
    props: { ...args },
    template: `
<button ${argsToTemplate(args, { exclude: ['text'] })} class="gap-3 !px-4">
    <gv-cv-icon-eye></gv-cv-icon-eye> ${args.text}
</button>
`,
  }),
};
