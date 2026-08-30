import cn from 'classnames'

import styles from './Burger.module.less'

type BurgerProps = {
    onClick?: () => void
}

export const Burger = ({ onClick }: BurgerProps) => {
    return (
        <button
            type="button"
            className={cn(styles.burger, 'gap-1 border-0 bg-transparent')}
            onClick={onClick}
        >
            <span className={styles.line} />
            <span className={styles.line} />
        </button>
    )
}
