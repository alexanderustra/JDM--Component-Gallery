import styles from '../../styles/cards.module.css'
import React from 'react';
interface ImgCardProps {
    imageUrl: string
    title:string
    subtitle:string
}

export const PrimaryActionCard: React.FC<ImgCardProps> = ({ imageUrl,title,subtitle }) => {
    return (
        <div className={styles.primaryActionContainer} >
            <img src={imageUrl} alt="Image" />
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
        </div>
    );
};
