import styles from "./Buttons.module.css"

interface ButtonProps {
    text:string
    type?: "success" | "danger" | "disabled"
    action?: () => void;
    className?: string 
    style?: React.CSSProperties;
}

export function Button ({text,type,action,className , style}:ButtonProps) {
    const buttonClasses = type ? styles[type] : styles.primaryButton;
    const combinedClasses = className ? `${buttonClasses} ${className}` : buttonClasses;

 return (
    <button onClick = {action} className={combinedClasses} style={style} >
        {text}
    </button>
 )   
}