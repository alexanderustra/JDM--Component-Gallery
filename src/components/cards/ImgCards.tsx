import styles from './cards.module.css'
import React from 'react';
export interface ImgCardProps {
    imageUrl: string
    imgPosition?: string
    title:string
    subtitle?:string
    action?: () => void;
    width?: string
    height?:string
    textColor?: string
}

export const BackgroundImgCard: React.FC<ImgCardProps> = ({ action ,imageUrl,title,subtitle,width,height,imgPosition,textColor }) => {

    const CardStyles = {
        backgroundImage: `url(${imageUrl})`,
        width: width,
        height:height,
        backgroundPosition: imgPosition,
        color: textColor
    }

    return (
        <div className={`${styles.backgroundImgCard} ${styles.card}`} 
            style={CardStyles} onClick={action}>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
        </div>
    );
};

export const CropImgCard: React.FC<ImgCardProps> = ({action, imageUrl,title,subtitle,width,height}) => {
    return (
        <div   
            onClick={action} 
            className={styles.cropImgContainer} 
            style={{
                width: width,
               height:height,
            }}  
            >
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <img 
            src={imageUrl} alt={title} 
            style={{ height: `calc(${height} - 150px)`}} 
            />
        </div>
    );
};

export const PrimaryActionCard: React.FC<ImgCardProps> = ({action, imageUrl,title,subtitle,width,height}) => {
    return (
        <div className={styles.primaryActionContainer} onClick={action}
            style={{width:width,height:height}} >
            <img src={imageUrl} alt={title} style={{ height: `calc(${height} - 70px)`}}/>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
        </div>
    );
};
