import styles from "../../styles/Inputs.module.css"

export function PrimaryInput () {
    return(
        <input type="text" className={styles.primaryInput} placeholder="Design System"/>
    )
}