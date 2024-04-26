import { Meta } from "@storybook/react";
import {PrimaryRadio }from "../../components/radios/PrimaryRadio"; 
import { RadioGroup } from "../../components/radios/radioGroup";

export default {
  title: "Radios",
  component: PrimaryRadio
} as Meta;


export const SimpleRadio= () => (
    <RadioGroup label="Select The Best Animal" >
        <PrimaryRadio id="Kangaroo" label="Kangaroo" />
        <PrimaryRadio id="Ratel" label="Ratel" />
        <PrimaryRadio id="Bear" label="Bear" />
        <PrimaryRadio id="KingCobra" label="King Cobra" />
    </RadioGroup>
);