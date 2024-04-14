import styles from './listBox.module.css'
import { ReactNode } from 'react';
import React from 'react'
interface ListBoxProps {
    children: ReactNode;
}
export function ListBox ({children}:ListBoxProps) {
    const heightCalculator = children ? React.Children.count(children) * 60 : 'auto';
    const listBoxStyle = {
        height: heightCalculator
    };
    return (
        <div className={styles.listContainer} style={listBoxStyle}>
            {children}
        </div>
    )
}