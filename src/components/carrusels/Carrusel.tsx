import { useState } from 'react';

import styles from './carrusel.module.css';

interface CarruselProps {
    imgs: string[];
    titles?: string[];
    onClick?: (value: string) => void;
}

export function Carrusel({ imgs, titles, onClick }: CarruselProps) {
    const [currentIdx, setCurrentIdx] = useState(0);

    const moveLeft = () => {
        setCurrentIdx(prevIdx => (prevIdx === 0 ? imgs.length - 1 : prevIdx - 1));
    };

    const moveRight = () => {
        setCurrentIdx(prevIdx => (prevIdx === imgs.length - 1 ? 0 : prevIdx + 1));
    };

    const renderImages = () => {
        const displayedImages = [
            imgs[(currentIdx + imgs.length - 1) % imgs.length],
            imgs[currentIdx],
            imgs[(currentIdx + 1) % imgs.length]
        ];

        return displayedImages.map((img, index) => {
            const actualIndex = (currentIdx + index - 1 + imgs.length) % imgs.length;
            const altText = titles && titles[actualIndex] ? `${titles[actualIndex]} - ${img}` : img;
            const isMiddleImg = index === 1;

            return (
                <div 
                    key={actualIndex} 
                    className={`${styles.carruselImg} ${isMiddleImg ? styles.focusedImg : ''}`}
                    onClick={() => {
                        if (index === 0) moveLeft();
                        else if (index === 1) {
                            if (typeof onClick === 'function') onClick(altText);
                        }
                        else if (index === 2) moveRight();
                    }}
                >
                    {titles && titles[actualIndex] && <h3>{titles[actualIndex]}</h3>}
                    <img src={img} alt={altText} />
                </div>
            );
        });
    };

    const renderDots = () => {
        return imgs.map((_, index) => {
            const isActive = index === currentIdx;
            return (
                <div 
                    key={index} 
                    className={`${styles.dot} ${isActive ? styles.activeDot : ''}`}
                />
            );
        });
    };

    return (
        <div className={styles.carruselContainer}>
           <div className={styles.carruselImgContainer}>
           {renderImages()}
           </div>
            <div className={styles.dotsContainer}>
                {renderDots()}
            </div>
        </div>
    );
}