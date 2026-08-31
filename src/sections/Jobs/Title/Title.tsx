import cn from 'classnames'

import styles from './Title.module.less'

export const Title = () => {
    return (
        <div className="d-flex flex-column align-items-center text-center gap-2">
            <p className={cn(styles.subtitle, 'mb-0')}>
                Выбери 1 из двух вариантов трудоустройства
            </p>
            <h2 className={cn(styles.title, 'mb-0 fw-bold text-uppercase text-white')}>
                Устроиться можно
            </h2>
        </div>
    )
}
