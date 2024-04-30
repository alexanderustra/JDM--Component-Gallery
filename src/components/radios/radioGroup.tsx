import React , {useState} from 'react';
import styles from './radios.module.css'

interface primaryRadioProps {
    label:string
    id:string 
    name: string
    checked:boolean
    onClick: (value: string) => void;
}
interface RadioGroupProps {
    label?: string;
    placeholder?: string;
    onChange: (value: string) => void; 
    children: React.ReactElement<primaryRadioProps>[];
}

export function RadioGroup({ children, label, onChange }: RadioGroupProps) {
    const [selectedRadio, setSelectedRadio] = useState<string>('');

    const handleRadioChange = (radioId: string) => {
        setSelectedRadio(radioId)
        onChange(radioId); 
    };

    return (
        <div>
            <p className={styles.label}>{label}</p>
            <ul>
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, {
                            checked: selectedRadio === child.props.id,
                            onClick: handleRadioChange, 
                        });
                    }
                    return child;
                })}
            </ul>
        </div>
    );
}