import {ReactNode, useState } from 'react';
import styles from './menus.module.css'; 

interface MenuProps {
    children: ReactNode;
}

export function HamburguerMenu({children}:MenuProps) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className={`${styles.navIcon} ${open ? styles.open : ''}`} onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={open ? styles.openedMenu : styles.closedMenu}>
                {children}
            </div>
        </>
    );
}
