import { Button } from '../../../../components/Button'
import styles from './ActionButtons.module.less'

export const ActionButtons = () => {
    return (
        <div className={`d-flex ${styles.buttons}`}>
            <div>
                <Button className={styles.button}>Что за Раста такой</Button>
            </div>
            <div>
                <Button outline className={styles.button}>
                    Скидки нашим
                </Button>
            </div>
        </div>
    )
}
