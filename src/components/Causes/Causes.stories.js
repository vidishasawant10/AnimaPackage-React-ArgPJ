import { Causes } from ".";

export default {
  title: "Components/Causes",
  component: Causes,
  argTypes: {
    property1: {
      options: ["default", "drop-down-1"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default",
    className: {},
  },
};
