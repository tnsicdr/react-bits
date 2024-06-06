import type { Meta, StoryObj } from "@storybook/react";
import { VisuallyHidden } from "./VisuallyHidden";

const meta: Meta<typeof VisuallyHidden> = {
  component: VisuallyHidden,
};

export default meta;

type Story = StoryObj<typeof VisuallyHidden>;

export const Primary: Story = {
  render: () => <VisuallyHidden>hidden</VisuallyHidden>,
};
