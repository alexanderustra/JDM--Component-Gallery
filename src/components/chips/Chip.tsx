import styles from "./chips.module.css"

interface ChipsProps {
    color?: string
    text: string
    type?:  "shadow" | "bordered"
}
export function Chip ({type,color,text}:ChipsProps) {
    const boxShadow = color ?  `0px 2px 6px 1px ${color}` : `0px 2px 6px 1px #336CFF`;
    const borderColor = color ? `2px solid ${color}` :  "#336CFF"
    const chipStyle = {
        border: type === "bordered" ? `2px solid ${borderColor}` : 'none',
        boxShadow: type === "shadow" ? boxShadow : "none" ,
        backgroundColor: type === "bordered" ? "transparent" : color || '#336CFF'
    };
    return (
        <div className={type ? styles[type] : styles.primaryChip} style={chipStyle} >
            {text}
        </div>
    )
}