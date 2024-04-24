import { Meta } from "@storybook/react";
import {Select }from "../../components/inputs/Select"; 

export default {
  title: "Selects",
  component: Select,
} as Meta;

export const PrimarySelect = () => (
  <Select  
    label="Label"
    placeholder="Select An Animal"
    >
        <option value="Kangaroo">Kangaroo</option>
        <option value="King Cobra">King Cobra</option>
        <option value="Ratel">Ratel </option>
  </Select>
);