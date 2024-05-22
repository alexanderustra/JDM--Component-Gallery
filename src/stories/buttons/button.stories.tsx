import { Meta } from "@storybook/react";
import {Button }from "../../components/buttons/Button"; 

export default {
  title: "Buttons",
  component: Button,
} as Meta;


export const AllButtons = () => (
  <>
    <Button>Primary Button</Button>
    <br />
    <br/>
    <Button type="danger">Danger</Button>
    <br />
    <br/>
    <Button  type="success">Success</Button>
    <br />
    <br/>
    <Button  type="disabled">Disabled</Button>
    <br />
    <br/>
    <Button>Button to check if fits content</Button>
  </>
);


