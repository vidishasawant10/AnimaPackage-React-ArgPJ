import { Login } from ".";

export default {
  title: "Components/Login",
  component: Login,
  argTypes: {
    property1: {
      options: ["drop-down-2", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "drop-down-2",
    className: {},
  },
};
