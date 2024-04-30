import { Meta } from "@storybook/react";
import {Button }from "../../components/buttons/Button"; 

export default {
  title: "Buttons",
  component: Button,
} as Meta;


export const PrimaryButton = () => (
  <Button text="Primary Button"  />
);
export const DangerButton = () => (
  <Button text="Danger" type="danger" />
);
export const SuccessButton = () => (
    <Button text="Success" type="success" />
);
export const DisabledButton = () => (
    <Button text="Disabled" type="disabled" />
);
export const ContentFitButton = () => (
  <Button text="Button to check if fits content"  />
);
  

