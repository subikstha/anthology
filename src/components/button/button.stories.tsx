import { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta = {
  title: 'Button',
  component: Button,
  args: {
    children: 'Just a fancy button',
    disabled: false,
    variant: 'primiary',
    size: 'medium',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};
