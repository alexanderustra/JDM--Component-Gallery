import React from 'react';
import styles from './tooltips.module.css';

interface ToolTipProps {
    button: React.ReactNode;
    tipText: string;
    position: "top" | "bottom" | "left" | "right";
    backgroundColor?: string 
}

const Tooltip: React.FC<ToolTipProps> = ({ button, tipText, position , backgroundColor }) => {
    const tooltipStyle = {
        backgroundColor: backgroundColor || '#23313F',
    };
    return (
        <div className={styles.tooltip} style={tooltipStyle}>
            {button}
            <div className={`${styles.tip} ${styles[position]}`} style={tooltipStyle}>{tipText}</div>
        </div>
    );
};

export default Tooltip;
