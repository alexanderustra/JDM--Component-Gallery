import { Meta } from "@storybook/react";
import {Button }from "../../components/buttons/Button"; 

export default {
  title: "Buttons",
  component: Button,
} as Meta;


export const AllButtons = () => (
  <>
    <Button text="Primary Button"  />
    <br />
    <br/>
    <Button text="Danger" type="danger" />
    <br />
    <br/>
    <Button text="Success" type="success" />
    <br />
    <br/>
    <Button text="Disabled" type="disabled" />
    <br />
    <br/>
    <Button text="Button to check if fits content"  />
  </>
);


