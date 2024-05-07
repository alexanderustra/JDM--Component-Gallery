import { useState } from "react"
import styles from "./Inputs.module.css"

interface inputProps {
    label?: string
    placeholder?: string
    invalid?: boolean 
    invalidMessage?: string
    type?: "text" | "number" | 'password'
    name: string
    onChange:  (value: string) => void;
}
export function Input ({
    onChange,
    label,
    placeholder,
    type,
    name,
    invalid,
    invalidMessage
    }:inputProps) 
    {
    const [showPassword, setShowPassword] = useState(false);
    let content = null;
    if (label) {
        content = <label htmlFor={name} className={styles.label}>{label}</label>;
    }
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); 
        console.log(showPassword)
    };
    const inputType = type === 'password' && !showPassword ? 'password' : 'text';
    
    const svg = (
        <svg
            onClick={togglePasswordVisibility}
            className={styles.svg}
            width="30"
            height="30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 5C7 5 2.73 8.11 1 12.5C2.73 16.89 7 20 12 20C17 20 21.27 16.89 23 12.5C21.27 8.11 17 5 12 5ZM12 17.5C9.24 17.5 7 15.26 7 12.5C7 9.74 9.24 7.5 12 7.5C14.76 7.5 17 9.74 17 12.5C17 15.26 14.76 17.5 12 17.5ZM12 9.5C10.34 9.5 9 10.84 9 12.5C9 14.16 10.34 15.5 12 15.5C13.66 15.5 15 14.16 15 12.5C15 10.84 13.66 9.5 12 9.5Z"
                fill="black"
                fillOpacity="0.6"
            />
        </svg>
    );

        return(
            <div className={styles.inputContainer}>
                {content}
                <input
                    onChange={(e)=>{
                        onChange(e.target.value)
                    }}
                    id={name} 
                    type={inputType} 
                    name={name} 
                    className={styles.primaryInput} 
                    placeholder={placeholder ? placeholder : ""}
                    style={invalid ? {border: '1px solid #FF4040'}: {border: '1px solid #336CFF'}}
                />
                {invalid && <p>{invalidMessage}</p>}
                {type === 'password' && svg }
            </div>
        )
}