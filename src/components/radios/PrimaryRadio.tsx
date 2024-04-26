import styles from './radios.module.css'

interface primaryRadioProps {
    label:string
    id:string 
    checked?:boolean
    onChange?: ()=>void
}
export function PrimaryRadio({ label, id, checked, onChange }: primaryRadioProps) {
    const handleClick = () => {
        if(onChange) {
            onChange();
        }
    };
    
    return (
        <li className={styles.primaryRadioContainer} id={id} onClick={handleClick}>
             <div className={checked ? styles.checked : styles.inputRadio}>
                <div></div>
             </div>
             <h4 className={checked ? styles.checkedLabel: styles.label}>{label}</h4>
        </li>
    )
}