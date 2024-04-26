import React , {useState} from 'react';
import styles from './radios.module.css'
interface radioProps {
    label?:string
    placeholder?: string;
    children: React.ReactElement<primaryRadioProps>[];
}

interface primaryRadioProps {
    label:string
    id:string 
    name: string
    checked:boolean
    onChange: () => void
}
export function RadioGroup({ children, label }:radioProps) {
    const [selectedRadio, setSelectedRadio] = useState<string>('');
    const handleRadioChange = (radioId: string) => {
        setSelectedRadio(radioId);
    };

    return (
        <div>
            <p className={styles.label}>{label}</p>
            <ul>
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, {
                            checked: selectedRadio === child.props.id,
                            onChange: () => handleRadioChange(child.props.id),
                        });
                    }
                    return child;
                })}
            </ul>
        </div>
    );
}