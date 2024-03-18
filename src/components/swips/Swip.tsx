import styles from '../../styles/swips.module.css';
import { useState } from 'react';

export function Swip() {
    const [isActive,setIsActive] = useState(false);

    const handleClick = ()=> {
        setIsActive(!isActive)
    }
    const swipClasses = isActive ? `${styles.swip} ${styles.swip_on}` : styles.swip;

    return (
        <div onClick={handleClick} className={styles.container}>
            <div className={swipClasses}></div>
        </div>
    );
}
