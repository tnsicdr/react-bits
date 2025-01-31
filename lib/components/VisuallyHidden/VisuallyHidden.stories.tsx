import type { Meta, StoryObj } from "@storybook/react";
import { VisuallyHidden } from "./VisuallyHidden";

const meta = {
  component: VisuallyHidden,
} satisfies Meta<typeof VisuallyHidden>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <VisuallyHidden>hidden</VisuallyHidden>,
};
