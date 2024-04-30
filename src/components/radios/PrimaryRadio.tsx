import styles from './radios.module.css'

interface primaryRadioProps {
    label:string
    id:string 
    checked?:boolean | false
    onClick?: (value: string) => void; 
    background?: boolean
}


export function PrimaryRadio({ label, id, checked, onClick }: primaryRadioProps) {
    const handleClick = () => {
        if(onClick) {
            onClick(id);
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
export function BorderedRadio({ label, id, checked, onClick , background }: primaryRadioProps) {
    const containerStyle = {
        backgroundImage: background ? 'linear-gradient(to bottom right, #23313F, #000A13)' : 'none',
        border: background ? 'none' : '1px solid #336CFF',
    };
    const textStyle = {
        color: background ? '#FFFFFF' : '#464646'
    }

    const handleClick = () => {
        if(onClick) {
            onClick(id);
        }
    };
    
    return (
        <li className={styles.borderedRadioContainer} style={containerStyle} id={id} onClick={handleClick}>
             <h4 className={checked ? styles.checkedLabel: styles.label} style={textStyle}>{label}</h4>
             <div className={checked ? styles.checked : styles.inputRadio}>
                <div></div>
             </div>
        </li>
    )
}