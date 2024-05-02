import { Meta } from "@storybook/react";
import {Input} from "../../components/inputs/Inputs"; 
import { Textarea } from "../../components/inputs/Textarea";
export default {
  title: "Inputs",
  component: Input, Textarea
} as Meta;

export const Inputs = () => (
  <>
    <Input 
    onChange={(e)=>{
      console.log(e)
    }}  
    name="input-1" 
    placeholder="Placeholder" 
    label="Default"
    />
    <Input 
    onChange={(e)=>{
      console.log(e)
    }} 
    type="number" 
    name="input-2" 
    placeholder="Placeholder" 
    label="Number"
    />
    <Input 
    onChange={(e)=>{
      console.log(e)
    }} 
    type="password" 
    name="input-3" 
    label="Password" 
    />

    <Input 
    onChange={(e)=>{
      console.log(e)
    }}  
    name="input-4"
    placeholder="Placeholder" 
    label="Invalid" 
    invalid 
    invalidMessage="Error Message"
    />
    <br/>
    <Textarea 
    cols={50}
    rows={7}
    label="Textarea" 
    placeholder="Placeholder" 
    name="textarea" 
    id="txtarea1" 
    onChange={(e)=>{
      console.log(e)
    }} 
    />
  </>
);
