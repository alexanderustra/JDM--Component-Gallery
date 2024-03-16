import styles from '../../styles/cards.module.css'
import React from 'react';
import { ImgCardProps } from '../../Props.d';
//---

export const CropImgCard: React.FC<ImgCardProps> = ({ imageUrl,title,subtitle }) => {
    return (
        <div className={styles.cropImgContainer} >
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <img src={imageUrl} alt="Image" />
        </div>
    );
};
