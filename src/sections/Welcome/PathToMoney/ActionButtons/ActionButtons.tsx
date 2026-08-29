import styles from './ActionButtons.module.less'

export const ActionButtons = () => {
    return (
        <div className={`d-flex ${styles.buttons}`}>
            <div>
                <button
                    type="button"
                    className={`fw-medium text-nowrap text-center  shadow-none text-black ${styles.primary}`}
                >
                    Что за Раста такой
                </button>
            </div>
            <div>
                <button
                    type="button"
                    className={`fw-medium text-nowrap text-center  shadow-none text-white bg-transparent ${styles.secondary}`}
                >
                    Скидки нашим
                </button>
            </div>
        </div>
    )
}
