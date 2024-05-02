import styles from './Inputs.module.css'

interface textareaProps {
    name: string 
    id: string 
    cols?: number 
    rows?: number
    label?: string 
    placeholder?: string
    onChange: (value:string) => void
}

export function Textarea ({name,id,cols,rows,onChange,label,placeholder}:textareaProps) {
    let content = null;
    if (label) {
        content = <label htmlFor={name} className={styles.label}>{label}</label>;
    }
    return (
        <div className={styles.textareaContainer} >
            {content}
            <textarea 
            className={styles.textarea} 
            name={name} 
            id={id} 
            cols={cols} 
            rows={rows}
            placeholder={placeholder}
            onChange={(e)=>{
                onChange(e.target.value)
            }}
        />
        </div>
    )
}