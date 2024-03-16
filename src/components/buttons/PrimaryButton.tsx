import styles from "../../styles/Buttons.module.css"

interface ButtonProps {
    text:string
    type:string;
}

export function PrimaryButton ({text,type}:ButtonProps) {
 return (
    <button className={`${styles[type]}`}>
        {text}
    </button>
 )   
}