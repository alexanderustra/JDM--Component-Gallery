import { Meta } from "@storybook/react";
import {Input} from "../../components/inputs/Inputs"; 
import { Textarea } from "../../components/inputs/Textarea";
import { Select } from "../../components/inputs/Select";
import { SearchBar } from "../../components/searchBars/SearchBar";
import { FileUploader } from "../../components/inputs/FileUploader";
export default {
  title: "Inputs",
  component: Input, Textarea, Select , SearchBar, FileUploader
} as Meta;

const searchData = [
  'long long text longer than last time',
"apple",
"banana",
"chair",
"dog",
"elephant",
"flower",
"guitar",
"hat",
"igloo",
"jacket",
"kangaroo",
"lamp",
"monkey",
"notebook",
"orange",
"penguin",
"queen",
"rabbit",
"socks",
"table"
]
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
  </>
);
export const TypeFile = ()=>(
  <FileUploader onNewFile={(files)=>{
    console.log(files)
  }}/>
)
export const Textareas = ()=>(
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
);

export const Selects = ()=> (
  <Select  
    label="Label"
    placeholder="Select An Animal"
    >
        <option value="Kangaroo">Kangaroo</option>
        <option value="King Cobra">King Cobra</option>
        <option value="Ratel">Ratel </option>
  </Select>
)

export const SearchBars = ()=>(
  <>
    <SearchBar 
      width="100%"
      placeholder="Search"
      onSelect={(value)=>{
        console.log(value)
      }} 
      color="#464646"
      data={searchData}
      />
    <SearchBar 
      width="100%"
      placeholder="Search"
      onClick={(value)=>{
      console.log(value)
    }} 
    color="#464646"
    />
  </>
)