import styles from './cards.module.css'
interface ImgCardProps {
    title:string
    subtitle:string
}

export function PrimaryCard ({title,subtitle}:ImgCardProps) {
    return (
        <div className={styles.primaryCard}>
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </div>
    )
}