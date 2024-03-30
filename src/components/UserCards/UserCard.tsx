import styles from './userCard.module.css'
import { useState } from 'react'

interface userProps {
    img:string
    name:string
    description:string 
    background?: boolean
    type?: "circle" | "square"
}

export function UserCard( {img,name,description,background,type}:userProps) {
    const [isHovered, setIsHovered] = useState(false);
    const userCardStyles = {
        background: background ? 'linear-gradient(to bottom right, #23313F, #000A13)' : 'transparent',
        color: background ? '#FFFFFF' : '#464646', 
        boxShadow: background ? '0px 6px 8px 0px rgba(0,0,0,0.66)' : 'none',
        textShadow: background ? 'none' : '2px 2px 2px rgba(0,0,0,0.4)',
    };

    const descriptionStyles = {
        color: background ? '#CCCCCC' : '#575757' ,
        textShadow : background ? 'none' : '2px 2px 2px rgba(0,0,0,0.4)' 
    };
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const hover = isHovered ? styles.hover : '';
    
    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`${type === 'square' ? styles.square : styles.circle} ${hover}`} style={userCardStyles}>
            <img src={img} alt={`${name} Profile Picture`} />
            <h4>{name}</h4>
            <h6 style={descriptionStyles}>{description}</h6>
        </div>
    )
}