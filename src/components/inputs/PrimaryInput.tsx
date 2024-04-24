import styles from "./Inputs.module.css"
interface inputPops {
    label?: string
    placeholder?: string
    type?: "text" | "email" | "number"
    name: string
}
export function PrimaryInput ({label,placeholder,type,name}:inputPops) {
    let content = null;
  if (label) {
      content = <label htmlFor={name} className={styles.label}>{label}</label>;
  }
    return(
        <div className={styles.inputContainer}>
            {content}
            <input id={name} type={type? type : "text"} name={name} className={styles.primaryInput} placeholder={placeholder ? placeholder : ""}/>
        </div>
    )
}