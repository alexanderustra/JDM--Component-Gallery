import styles from './searchBar.module.css';
import React, { useState, ChangeEvent } from 'react';

interface searchBarProps {
    style?: 'colorful';
    data?: string[];
    onSelect: (name: string) => void; 
}

export function SearchBar({ style, data, onSelect }: searchBarProps) {
    const [searchResults, setSearchResults] = useState<string[]>([]);
    const [searchText, setSearchText] = useState<string>('');

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

    const basicStyle: React.CSSProperties = {
        padding: '0px',
        border: '1px solid black',
        marginTop: '1px',
    };

    const svg = (
        <svg
            width="35"
            height="35"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="10" cy="10" r="10" fill="url(#paint0_linear_198_15)" />
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
        onSelect(name);
    };

    return (
        <div className={styles.container}>
            <input
                type="text"
                className={styles.searchBar}
                style={style ? undefined : basicStyle}
                value={searchText}
                onChange={handleInputChange}
            />
            {svg}
            {searchResults.length > 0 && (
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
