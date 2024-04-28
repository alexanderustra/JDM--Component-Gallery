import styles from './modals.module.css'
import React, { ReactNode, useState } from 'react';
import { Button } from '../buttons/Button';

interface modalProps {
    active: boolean
    type?: 'long' | 'short'
    title:string
    children?: ReactNode;
    onAgree: () => void 
    onDeny: () => void 
}
export function PrimaryModal ({children, title, onAgree , onDeny , type, active}:modalProps) {
    const [isModalOpened,setIsModalOpened] = useState(active)

    const handleDeny =()=>{
        setIsModalOpened(false)
        onDeny()
    }
    const handleAgree =()=>{
        setIsModalOpened(false)
        onAgree()
    }
    const modalStyles = {
        width: type === 'long' ? '520px' : type === 'short' ? '230px' : '280px',
        display: isModalOpened ? "block" : 'none'
    };
    const buttonLeftStyles = {
        marginRight: type === 'short' ? '15px' : '40px'
    };

    const buttonRightStyles = {
        marginLeft: type === 'short' ? '15px' : '40px'
    };
    
    return (
        <div className={styles.background} style={isModalOpened ? {display: 'flex'} : {display:'none'}}>
            <div className={styles.primaryModal} style={modalStyles}>
            <h3>{title}</h3>
            {type !== 'short' && children}
            <hr />
            <div className= {styles.buttonContainer}>
                <Button action={handleDeny} text='Deny' type='danger'  style={buttonLeftStyles} />
                <Button action={handleAgree} text='Agree' type='success'  style={buttonRightStyles} />
            </div>
         </div>
        </div>
    )
}