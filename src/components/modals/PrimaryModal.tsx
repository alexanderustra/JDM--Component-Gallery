import styles from './modals.module.css'
import React, { ReactNode, useState } from 'react';
import { Button } from '../buttons/Button';

interface modalProps {
    active: boolean
    type?: 'long' | 'short'
    title:string
    agreeBtn?:string 
    denyBtn?:string 
    children?: ReactNode;
    onAgree: () => void 
    onDeny: () => void 
}
export function PrimaryModal ({children, title, onAgree , onDeny , type, active , agreeBtn,denyBtn}:modalProps) {
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
        marginLeft: type === 'short' ? '0px' : '20px'
    };

    const buttonRightStyles = {
        marginRight: type === 'short' ? '0px' : '20px'
    };
    const titleStyle = {
        fontSize:  type === 'short' ? '20px' : '25px'
    }
    
    return (
        <div className={styles.background} style={isModalOpened ? {display: 'flex'} : {display:'none'}}>
            <div className={styles.primaryModal} style={modalStyles}>
            <h3 style={titleStyle} >{title}</h3>
            {type !== 'short' && children}
            <hr />
            <div className= {styles.buttonContainer}>
                <Button onClick={handleDeny}  type='danger'  style={buttonLeftStyles}>{denyBtn || 'Deny'}</Button>
                <Button onClick={handleAgree} type='success'  style={buttonRightStyles} >{agreeBtn || 'Agree'}</Button>
            </div>
         </div>
        </div>
    )
}