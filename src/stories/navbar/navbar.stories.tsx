import { Meta } from "@storybook/react";
import { NavBar } from "../../components/navbars/NavBar";
export default {
  title: "NavBar",
  component: NavBar
} as Meta;

export const Navbar = ()=>(
    <NavBar 
    textColor="#464646"
    logo="src\assets\logo.png"
    searchBar
    searchBarFunction={(value)=>{
        console.log(value)
    }}>
        <h2>Item 1</h2>
        <h2>Item 2</h2>
        <h2>Item 3</h2>
    </NavBar>
)