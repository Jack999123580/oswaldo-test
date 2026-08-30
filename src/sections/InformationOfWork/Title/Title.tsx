import cn from 'classnames'

import styles from './Title.module.less'

export const Title = () => {
    return (
        <p
            className={cn(
                styles.title,
                'd-flex flex-column m-0 fw-bold text-center text-uppercase text-white',
            )}
        >
            <span className={cn(styles.line, styles.highlight, 'text-black text-nowrap')}>
                Работай
            </span>
            <span className={cn(styles.line, styles.accent, 'text-nowrap')}>В свободное</span>
            <span className={cn(styles.line, styles.accent, 'text-nowrap')}>Время</span>
            <span className={cn(styles.line, 'text-nowrap')}>Без плана</span>
        </p>
    )
}
