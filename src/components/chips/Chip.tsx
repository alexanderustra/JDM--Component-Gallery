import styles from "../../styles/chips.module.css"

interface ChipsProps {
    color?: string
    text: string
    type?:  "shadow" | "bordered"
}
export function Chip ({type,color,text}:ChipsProps) {
    const boxShadow = `0px 2px 6px 1px ${color}`;
    const chipStyle = {
        border: type === "bordered" ? `2px solid ${color}` : 'none',
        boxShadow: type === "shadow" ? boxShadow : "none" ,
        backgroundColor: type === "bordered" ? "transparent" : color || '#336CFF'
    };
    return (
        <div className={type ? styles[type] : styles.primaryChip} style={chipStyle} >
            {text}
        </div>
    )
}