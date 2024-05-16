import styles from './listBox.module.css'
import { CSSProperties, ReactNode } from 'react';
interface ListBoxProps {
    children: ReactNode;
    width?:string
    style?: CSSProperties
}
export function ListBox ({children,width,style}:ListBoxProps) {
    
    const listBox = {
        width:width,
        ...style
    }
    return (
        <div className={styles.listContainer}  style={listBox}>
            {children}
        </div>
    )
}