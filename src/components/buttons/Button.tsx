import { ReactNode} from "react";
import styles from "./Buttons.module.css"

interface ButtonProps {
    children: ReactNode;
    type?: "success" | "danger" | "disabled"
    onClick?: () => void;
    className?: string 
    style?: React.CSSProperties;
}

export function Button ({children,type,onClick,className , style}:ButtonProps) {
    const buttonClasses = type ? styles[type] : styles.primaryButton;
    const combinedClasses = className ? `${buttonClasses} ${className}` : buttonClasses;

 return (
    <button onClick = {onClick} className={combinedClasses} style={style} >
        {children}
    </button>
 )   
}