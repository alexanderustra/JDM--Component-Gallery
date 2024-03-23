import styles from './cards.module.css'
import React from 'react';
export interface ImgCardProps {
    imageUrl: string
    title:string
    subtitle:string
    action?: () => void;
}

export const BackgroundImgCard: React.FC<ImgCardProps> = ({ action ,imageUrl,title,subtitle }) => {
    return (
        <div className={styles.backgroundImgCard} style={{ backgroundImage: `url(${imageUrl})` }} onClick={action}>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
        </div>
    );
};
