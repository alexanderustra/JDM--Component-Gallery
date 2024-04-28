import { Meta } from "@storybook/react";
import { PrimaryModal } from "../../components/modals/PrimaryModal";

export default {
  title: "Modals",
  component: PrimaryModal
} as Meta;

const handleClick = (text:string) => {
    return (
        alert(text)
    )
}
export const Modal= () => (
    <PrimaryModal 
        active
        title="Title" 
        type="long"
        onAgree={() => handleClick('Agree')}
        onDeny={() => handleClick('Deny')}
        >
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos exercitationem, quod quae amet accusantium sint illo quidem voluptas ea veniam consequuntur.</p>
    </PrimaryModal>
);