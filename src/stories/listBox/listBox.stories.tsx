import { Meta } from "@storybook/react";
import { ListBox } from "../../components/listBox/ListBox";
export default {
  title: "ListBox",
  component: ListBox
} as Meta;

export const ListBoxes = ()=>(
    <ListBox width="300px">
        <h3>Item 1 </h3>
        <h3>Item 2</h3>
        <h3>Item 3 but longer than last time</h3>
    </ListBox>
)