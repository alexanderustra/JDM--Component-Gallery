import styles from './userCard.module.css'
import { useState } from 'react'

interface userProps {
    img:string
    name:string
    description:string 
    background?: boolean
    longText?: boolean
    type?: "circle" | "square"
}

export function UserCard( {img,name,description,background,type,longText}:userProps) {
    const [isHovered, setIsHovered] = useState(false);
    const userCardStyles = {
        background: background ? 'linear-gradient(to bottom right, #23313F, #000A13)' : 'transparent',
        color: background ? '#FFFFFF' : '#464646', 
    };

    const titleStyles = {
        fontWeight:  background ? '400' : '600' ,
    }
    const descriptionStyles = {
        fontWeight:  background ? '400' : '500' ,
        color: background ? '#CCCCCC' : '#575757' ,
    };
    const imgStyles =  {
        height: longText ? 'auto' : '64px'
    }
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const hover = isHovered ? styles.hover : '';
    
    return (
        <div 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
            className={`${type === 'square' ? styles.square : styles.circle} ${hover}`} 
            style={userCardStyles}
        >
            <img src={img} alt={`${name} Profile Picture`} style={imgStyles}  />
            <div className={styles.textContainer}>
                <h4 style={titleStyles}>{name}</h4>
                <h6 style={descriptionStyles}>{description}</h6>
            </div>
        </div>
    )
}