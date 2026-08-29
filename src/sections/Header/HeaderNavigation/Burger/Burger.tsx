import styles from './Burger.module.less'

export const Burger = () => {
    return (
        <button type="button" className="d-flex flex-column gap-1 border-0 bg-transparent p-0">
            <span className={styles.line} />
            <span className={styles.line} />
        </button>
    )
}
