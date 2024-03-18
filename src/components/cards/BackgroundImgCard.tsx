import styles from '../../styles/cards.module.css'
import React from 'react';
export interface ImgCardProps {
    imageUrl: string
    title:string
    subtitle:string
}

export const BackgroundImgCard: React.FC<ImgCardProps> = ({ imageUrl,title,subtitle }) => {
    return (
        <div className={styles.backgroundImgCard} style={{ backgroundImage: `url(${imageUrl})` }}>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
        </div>
    );
};
