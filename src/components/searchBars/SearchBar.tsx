import styles from './searchBar.module.css';
import React, { useState, ChangeEvent, CSSProperties } from 'react';

interface searchBarProps {
    placeholder?: string
    style?: CSSProperties
    color?: string
    data?: string[];
    width?:string
    onSelect?: (name: string) => void; 
    onClick?: (name: string) => void; 
}

export function SearchBar({ data, onSelect ,onClick , color,style,placeholder,width}: searchBarProps) {
    const [searchResults, setSearchResults] = useState<string[]>([]);
    const [searchText, setSearchText] = useState<string>('');
    const [showResultsContainer,setShowResultsContainer] = useState(false)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchText(value);
        const results = performSearch(value);
        setSearchResults(results);
    };

    const performSearch = (query: string) => {
        if (!query || !data || data.length === 0) {
            return [];
        }

        const lowerCaseQuery = query.toLowerCase();
        return data.filter(name =>
            name.toLowerCase().includes(lowerCaseQuery)
        );
    };

    const svg = (
        <svg
            onClick={()=>{
                if(onClick) {
                    onClick(searchText)
                }
            }}
            width="35"
            height="35"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="10" cy="10" r="10" fill="#0681FB" />
            <circle cx="9.5" cy="9.5" r="3.75" stroke="white" strokeWidth="1.5" />
            <path d="M13.4984 12.4396L12.938 11.9412L11.9412 13.062L12.5016 13.5604L13.4984 12.4396ZM15.1481 15.914C15.4576 16.1892 15.9317 16.1615 16.2069 15.852C16.4822 15.5424 16.4544 15.0684 16.1449 14.7931L15.1481 15.914ZM12.5016 13.5604L15.1481 15.914L16.1449 14.7931L13.4984 12.4396L12.5016 13.5604Z" fill="white" />
            <defs>
                <linearGradient id="paint0_linear_198_15" x1="0.833333" y1="5.41667" x2="18.75" y2="15" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0075FF" />
                    <stop offset="1" stopColor="#FF0DBB" />
                </linearGradient>
            </defs>
        </svg>
    );

    const handleClick = (name: string) => {
        if(onSelect) {
            onSelect(name);
            setSearchText(name)
            setShowResultsContainer(false)
        }
    };
    const inputStyle = {
        color: color,
        width:width,
        ...style
    }

    return (
        <div className={onSelect ? styles.forSelect : styles.container} style={{width:width}}>
            <input
                onFocus={()=>{
                    setShowResultsContainer(true)
                }}
                onBlur={()=>{
                    setTimeout(() => {
                        setShowResultsContainer(false);
                    }, 200); 
                }}
                placeholder={placeholder}
                style={inputStyle}
                type="text"
                className={styles.searchBar}
                value={searchText}
                onChange={handleInputChange}
            />
            {onClick && svg}
            {searchResults.length > 0 && showResultsContainer && (
                <div className={styles.resultsContainer}>
                    {searchResults.map((name, index) => (
                        <div key={index} onClick={() => handleClick(name)}>
                            <h4>{name}</h4>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
