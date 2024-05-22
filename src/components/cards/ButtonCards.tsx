import { Button } from '../buttons/Button';
import styles from './buttonCards.module.css'
import React, { CSSProperties } from 'react';

export interface BtnCardProps {
    type: 'vertical' | 'horizontal'
    imageUrl: string
    title:string
    subtitle?:string
    primaryBtnText: string
    secondaryBtnText?: string
    style?: CSSProperties
    primaryBtnAction: ()=> void
    secondaryBtnAction?: ()=> void
}

export function ButtonCard ({
    imageUrl,
    title,
    subtitle,
    primaryBtnText,
    secondaryBtnText,
    primaryBtnAction,
    secondaryBtnAction,
    type,
    style
    }:BtnCardProps) {

    const CardStyles = {
        flexWrap: type === 'vertical' ? 'wrap' : 'noWrap',
        ...style
    }

    const imgStyles = {
        width : type === 'vertical' ? '100%' : '40%',
        height:type === 'vertical' ? '40%' : '100%',
        borderRadius: type === 'vertical' ? '10px 10px 0px 0px' : '10px 0px 0px 10px'
    }
    const contentStyles = {
        width : type === 'vertical' ? '100%' : '60%',
    }

    return (
        <div style={CardStyles} className={styles.buttonCardContainer}>
            <img src={imageUrl} alt={title}  style={imgStyles} />
            <div className={styles.content} style={contentStyles}>
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
                <div className={styles.buttonContainer}>
                    {secondaryBtnText && <Button onClick={secondaryBtnAction} style={{margin:'5px'}}>{secondaryBtnText} </Button>}
                    <Button  onClick={primaryBtnAction}  style={{marginTop:'20px'}}>{primaryBtnText}</Button>
                </div>
            </div>
        </div>
    )
}