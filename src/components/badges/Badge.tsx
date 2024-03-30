import styles from './badges.module.css'

interface badgeProps {
    img: string
    content:number
}
export function Badge ({img,content}:badgeProps) {
    return (
        <div className={styles.badge}>
            <img  src={img} alt={`${img}`} />
            <div className={styles.content}>{content}</div>
        </div>
    )
}