import { Meta } from "@storybook/react";
import {PrimaryInput }from "../../components/inputs/PrimaryInput"; 

export default {
  title: "Inputs",
  component: PrimaryInput,
} as Meta;

export const Input = () => (
  <>
    <PrimaryInput  name="input-1" placeholder="Placeholder" label="Default"/>
    <PrimaryInput type="number" name="input-2" placeholder="Placeholder" label="Number"/>
    <PrimaryInput type="password" name="input-3" placeholder="Placeholder" label="Password" />
  </>
);
