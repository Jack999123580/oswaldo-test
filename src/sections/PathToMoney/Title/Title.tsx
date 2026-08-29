import styles from './Title.module.less'

export const Title = () => {
    return (
        <h1
            className={`${styles.title} d-flex flex-column align-items-center m-0 fw-bold text-center text-uppercase text-white`}
        >
            <span className={styles.line}>Твой путь</span>
            <span
                className={`${styles.line} ${styles.highlight} d-inline-block py-1 text-black text-nowrap`}
            >
                К большим деньгам
            </span>
            <span className={styles.line}>начинается</span>
            <span className={`${styles.line} ${styles.accent}`}>здесь</span>
        </h1>
    )
}
