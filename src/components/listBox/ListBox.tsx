import styles from './listBox.module.css'
import { ReactNode } from 'react';
interface ListBoxProps {
    children: ReactNode;
}
export function ListBox ({children}:ListBoxProps) {
    return (
        <div className={styles.listContainer}>
            {children}
        </div>
    )
}