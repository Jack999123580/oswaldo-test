import styles from './Burger.module.less'

type BurgerProps = {
    onClick?: () => void
}

export const Burger = ({ onClick }: BurgerProps) => {
    return (
        <button
            type="button"
            className={`gap-1 border-0 bg-transparent ${styles.burger}`}
            onClick={onClick}
        >
            <span className={styles.line} />
            <span className={styles.line} />
        </button>
    )
}
