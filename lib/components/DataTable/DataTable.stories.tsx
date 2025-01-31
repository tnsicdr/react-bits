import { Meta, StoryObj } from "@storybook/react/*";
import { DataTable } from "./DataTable";

const meta = {
  title: "Components/DataTable",
  component: DataTable,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    columns: { control: "object" },
    data: { control: "object" },
  },
} satisfies Meta<typeof DataTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    tableName: 'testTable',
    columns: [
      { label: "Name", fieldName: "name" },
      { label: "Status", fieldName: "status" },
    ],
    data: [{ name: "Timmy", status: "On-Prem" }],
  },
};
