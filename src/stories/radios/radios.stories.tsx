import { Meta } from "@storybook/react";
import {PrimaryRadio ,BorderedRadio}from "../../components/radios/PrimaryRadio"; 
import { RadioGroup } from "../../components/radios/radioGroup";

export default {
  title: "Radios",
  component: PrimaryRadio, BorderedRadio
} as Meta;


export const SimpleRadio= () => (
    <RadioGroup label="Select The Best Animal" onChange={(e)=>{
      console.log(e)
    }} >
        <PrimaryRadio id="Kangaroo" label="Kangaroo" />
        <PrimaryRadio id="Ratel" label="Ratel" />
        <PrimaryRadio id="Bear" label="Bear" />
        <PrimaryRadio id="KingCobra" label="King Cobra" />
    </RadioGroup>
);

export const BoorderedRadio= () => (
  <RadioGroup label="Select The Best Animal" onChange={(e)=>{
    console.log(e)
  }} >
      <BorderedRadio id="Kangaroo" label="Kangaroo"/>
      <BorderedRadio id="Ratel" label="Ratel" />
      <BorderedRadio id="Bear" label="Bear" />
      <BorderedRadio id="KingCobra" label="King Cobra" />
  </RadioGroup>
);