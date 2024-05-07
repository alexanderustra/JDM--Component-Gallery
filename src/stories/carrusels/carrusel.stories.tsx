import { Meta } from "@storybook/react";
import { Carrusel } from "../../components/carrusels/Carrusel";
export default {
  title: "Carrusel",
  component: Carrusel
} as Meta;
const imgs = ['https://i.pinimg.com/564x/16/12/d7/1612d739b0e00667f0c7d0fc21b0b399.jpg','https://i.pinimg.com/564x/c8/ef/a1/c8efa11770d1f37e665898963e6ec08b.jpg','https://i.pinimg.com/564x/a4/ff/d1/a4ffd146e82012fb19dc5cc905d35c88.jpg','https://i.pinimg.com/736x/7f/9e/9a/7f9e9a27a8a6bb28bf3f3a561b18b43d.jpg']

const titles = ['title 1','title 2','title 3','title 4',]
export const Carrusels = () => {
    return (
        <Carrusel imgs ={imgs}  titles={titles} onClick={(value)=>{
            console.log(value)
        }}/>
    )
}
