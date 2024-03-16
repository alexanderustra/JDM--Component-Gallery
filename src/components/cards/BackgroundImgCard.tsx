import styles from '../../styles/cards.module.css'
import React from 'react';
import { ImgCardProps } from '../../Props.d';

export const BackgroundImgCard: React.FC<ImgCardProps> = ({ imageUrl,title,subtitle }) => {
    return (
        <div className={styles.backgroundImgCard} style={{ backgroundImage: `url(${imageUrl})` }}>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
        </div>
    );
};
