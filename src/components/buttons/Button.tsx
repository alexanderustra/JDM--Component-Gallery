import styles from "./Buttons.module.css"

interface ButtonProps {
    text:string
    type?: "success" | "danger" | "disabled"
    action?: () => void;
}

export function Button ({text,type,action}:ButtonProps) {
 return (
    <button onClick = {action} className={type? styles[type] : styles.primaryButton}>
        {text}
    </button>
 )   
}