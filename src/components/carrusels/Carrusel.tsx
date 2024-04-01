import React, { useState } from 'react';

import styles from './carrusel.module.css';

interface CarruselProps {
    imgs: string[];
    titles?: string[];
}

export function Carrusel({ imgs, titles }: CarruselProps) {
    const [currentIdx, setCurrentIdx] = useState(0);

    const moveLeft = () => {
        setCurrentIdx(prevIdx => Math.max(prevIdx - 1, 0));
    };

    const moveRight = () => {
        setCurrentIdx(prevIdx => Math.min(prevIdx + 1, imgs.length - 3));
    };

    const renderImages = () => {
        return imgs.slice(currentIdx, currentIdx + 3).map((img, index) => {
            const actualIndex = currentIdx + index;
            const altText = titles && titles[actualIndex] ? `${titles[actualIndex]} - ${img}` : img;
            const isMiddleImg = index === 1;

            return (
                <div 
                    key={actualIndex} 
                    className={`${styles.carruselImgContainer} ${isMiddleImg ? styles.focusedImg : ''}`}
                    onClick={() => {
                        if (index === 0) moveLeft();
                        else if (index === 2) moveRight();
                    }}
                >
                    {titles && titles[actualIndex] && <h3>{titles[actualIndex]}</h3>}
                    <img src={img} alt={altText} />
                </div>
            );
        });
    };

    return (
        <div className={styles.carruselContainer}>
            {renderImages()}
        </div>
    );
}
