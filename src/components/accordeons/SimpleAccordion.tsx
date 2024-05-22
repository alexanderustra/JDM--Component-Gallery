import {useState } from "react";
import React from "react";
import styles from './accordions.module.css'

interface AccordionItem {
  title: string;
  content: string;
  subtitle?: string
}

interface AccordionProps {
  items: AccordionItem[];
  type?: 'short' | 'long'
}

export const SimpleAccordion: React.FC<AccordionProps> = ({ items,type }: AccordionProps) => {
  const OpenIcon = () => (
    <svg width="17" height="17" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7V8H9V7H7Z" fill="#FFFFFF"/>
    </svg>
  );
  
  const CloseIcon = () => (
    <svg  width="17" height="17" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.70717 0.292893C8.31664 -0.0976312 7.68348 -0.0976312 7.29295 0.292893L0.928992 6.65685C0.538468 7.04738 0.538468 7.68054 0.928992 8.07107C1.31952 8.46159 1.95268 8.46159 2.34321 8.07107L8.00006 2.41421L13.6569 8.07107C14.0474 8.46159 14.6806 8.46159 15.0711 8.07107C15.4617 7.68054 15.4617 7.04738 15.0711 6.65685L8.70717 0.292893ZM9.00006 2V1H7.00006V2H9.00006Z" fill="#FFFFFF"/>
    </svg>
  );

  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const accordeonStyle = {
    maxWidth: type === 'short' ? '300px' : type === 'long' ? '900px' : '500px'
  }

  const onTitleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index); 
  };


  const renderedItems = items.map((item, index) => {
    const isActive = index === activeIndex ? 'active' : '';
    return (
      <React.Fragment key={item.title} >
        <div 
          className={styles.AccordionTitle + isActive} 
          onClick={() => onTitleClick(index)}
          >
          <h3 style={{fontFamily:'"Roboto Mono", monospace'}}>
            {item.title} {isActive ? <CloseIcon /> : <OpenIcon />}
          </h3>
          {item.subtitle && <p style={{fontFamily:'"Roboto", monospace',fontSize:'18.5px'}}>{item.subtitle}</p>}
        </div>
        <div 
        className={styles.AccordionContent + isActive}
        style={{borderBottom:'1px solid #FFFFFF'}}
        >
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className={styles.AccordionContainer} style = {accordeonStyle}>{renderedItems}</div>;
};