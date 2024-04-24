import { Meta } from "@storybook/react";
import {PrimaryInput }from "../../components/inputs/PrimaryInput"; 

export default {
  title: "Inputs",
  component: PrimaryInput,
} as Meta;

export const Input = () => (
  <PrimaryInput name="input-1" placeholder="Placeholder" label="Label"/>
);