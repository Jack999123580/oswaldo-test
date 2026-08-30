import cn from 'classnames'

import styles from './Title.module.less'

export const Title = () => {
    return (
        <h1
            className={cn(
                styles.title,
                'd-flex flex-column align-items-center m-0 fw-bold text-center text-uppercase text-white',
            )}
        >
            <span className={styles.line}>Твой путь</span>
            <span
                className={cn(
                    styles.line,
                    styles.highlight,
                    'd-inline-block text-black text-nowrap',
                )}
            />
                К большим деньгам
            </span>
            <span className={styles.line}>начинается</span>
            <span className={cn(styles.line, styles.accent)}>здесь</span>
        </h1>
    )
}
