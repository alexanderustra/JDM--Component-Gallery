import {useState } from "react";
import React from "react";
import styles from '../../styles/accordions.module.css'

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const SimpleAccordion: React.FC<AccordionProps> = ({ items }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const onTitleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index); 
  };

  const renderedItems = items.map((item, index) => {
    const isActive = index === activeIndex ? 'active' : '';
    return (
      <React.Fragment key={item.title}>
        <div className={styles.uiAccordionTitle + isActive} onClick={() => onTitleClick(index)}>
          <h3>
            {item.title}
          </h3>
        </div>
        <div className={styles.uiAccordionContent + isActive}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className={styles.uiAccordion}>{renderedItems}</div>;
};

export default SimpleAccordion;