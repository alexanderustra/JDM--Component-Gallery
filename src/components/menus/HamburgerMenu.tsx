import {ReactNode, useState } from 'react';
import styles from './menus.module.css'; 

interface MenuProps {
    children: ReactNode;
    background?: 'none' | 'dark' | 'blue';
}

export function HamburguerMenu({children,background}:MenuProps) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    const shadow = `
        -webkit-box-shadow: 0px 5px 6px 0px rgba(0,0,0,0.66);
        -moz-box-shadow: 0px 5px 6px 0px rgba(0,0,0,0.66);
        box-shadow: 0px 5px 6px 0px rgba(0,0,0,0.66);
    `
    const menuBtnStyle = {
        backgroundImage: background === 'dark' ? 'linear-gradient(to bottom right, #23313F, #000A13)' :
            background === 'blue' ? 'linear-gradient(to bottom right, #336CFF, #336CFF)' : '',
        boxShadow: background === 'none' ? 'none' : shadow,
        backgroundColor: background === 'none' ? 'transparent' : ''
    };

    return (
        <>
            <div className={`${styles.menuBtn} ${open ? styles.open : ''}`} style={menuBtnStyle} onClick={handleClick}>
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
