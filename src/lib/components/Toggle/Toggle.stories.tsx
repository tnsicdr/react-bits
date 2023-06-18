import { Meta, StoryObj } from "@storybook/react";
import Toggle from "./Toggle";
import { useState } from "react";

const meta: Meta<typeof Toggle> = {
  component: Toggle,
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Primary: Story = {
  render: () => {
    const [isToggled, setIsToggled] = useState<boolean>(false);
    return <Toggle isToggled={isToggled} onToggle={setIsToggled} />;
  },
};
