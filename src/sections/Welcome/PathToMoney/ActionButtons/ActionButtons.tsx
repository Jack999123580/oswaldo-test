import cn from 'classnames'

import { LargeButton } from '../../../../components/LargeButton'
import styles from './ActionButtons.module.less'

export const ActionButtons = () => {
    return (
        <div className={cn(styles.buttons, 'd-flex')}>
            <LargeButton>Что за Раста такой</LargeButton>
            <div>
                <LargeButton outline>Скидки нашим</LargeButton>
            </div>
        </div>
    )
}
