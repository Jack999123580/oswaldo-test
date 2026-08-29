import styles from './ActionButtons.module.less'

export const ActionButtons = () => {
    return (
        <div className="d-flex gap-2 w-100">
            <button
                type="button"
                className={`small fw-medium text-nowrap text-center rounded-pill shadow-none text-black ${styles.primary}`}
            >
                Что за Раста такой
            </button>
            <button
                type="button"
                className={`small fw-medium text-nowrap text-center rounded-pill shadow-none text-white bg-transparent ${styles.secondary}`}
            >
                Скидки нашим
            </button>
        </div>
    )
}
