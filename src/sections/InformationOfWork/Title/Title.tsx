import cn from 'classnames'

import styles from './Title.module.less'

export const Title = () => {
    return (
        <div
            className={cn(
                styles.title,
                'd-flex flex-column m-0 fw-bold text-center text-uppercase text-white position-relative',
            )}
        >
            <div className={styles.work}>Работай</div>

            <span className={styles.accent}>В свободное</span>
            <span className={styles.accent}>Время</span>
            <span className={styles.noPlan}>Без плана</span>
        </div>
    )
}
