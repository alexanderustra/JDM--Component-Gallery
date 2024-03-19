import styles from "../../styles/Inputs.module.css"

interface inputPops {
    placeholder?: string
    type?: "text" | "email" | "number"
    name: string
}
export function Input ({placeholder,type,name}:inputPops) {
    return(
        <input type={type? type : "text"} name={name} className={styles.primaryInput} placeholder={placeholder ? placeholder : ""}/>
    )
}