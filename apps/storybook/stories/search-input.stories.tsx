import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from '@repo/ui/components/molecules/search-input';

const meta: Meta<typeof SearchInput> = {
  component: SearchInput,
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Primary: Story = {
  args: {},
};
