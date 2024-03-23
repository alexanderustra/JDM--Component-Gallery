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
export const CropImgCard: React.FC<ImgCardProps> = ({action, imageUrl,title,subtitle,primaryColor,secondaryColor}) => {
    return (
        <div   onClick={action} style={{
            backgroundImage: `linear-gradient(to bottom right, ${primaryColor}, ${secondaryColor})`}}  className={styles.cropImgContainer} >
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <img src={imageUrl} alt="Image" />
        </div>
    );
};
