import { Meta } from "@storybook/react";
import {Chip }from "../../components/chips/Chip"; 

export default {
  title: "Chips",
  component: Chip,
} as Meta;


export const PrimaryChip = () => (
  <Chip text="Primary Chip"  />
);
export const ShadowedChip = () => (
    <Chip text="Shadowed Chip" type="shadow" />
  );
  export const BorderedChip = () => (
    <Chip text="Bordered Chip" type="bordered"   />
  );