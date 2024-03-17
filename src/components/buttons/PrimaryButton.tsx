import styles from "../../styles/Buttons.module.css"

interface ButtonProps {
    text:string
    type: "primary-button" | "success" | "danger" | "disabled"
}

export function PrimaryButton ({text,type}:ButtonProps) {
 return (
    <button className={`${styles[type]}`}>
        {text}
    </button>
 )   
}