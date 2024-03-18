import styles from "../../styles/Inputs.module.css"

export function Input () {
    return(
        <input type="text" className={styles.primaryInput} placeholder="Design System"/>
    )
}