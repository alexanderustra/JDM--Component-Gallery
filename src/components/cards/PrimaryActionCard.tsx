import styles from './cards.module.css'
import React from 'react';
interface ImgCardProps {
    imageUrl: string
    title:string
    subtitle:string
    primaryColor?:string
    secondaryColor?:string
    action?: () => void;
}

export const PrimaryActionCard: React.FC<ImgCardProps> = ({action, imageUrl,title,subtitle, primaryColor,secondaryColor}) => {
    return (
        <div className={styles.primaryActionContainer} onClick={action}  style={{
            backgroundImage: `linear-gradient(to bottom right, ${primaryColor}, ${secondaryColor})`}} >
            <img src={imageUrl} alt="Image" />
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
        </div>
    );
};
