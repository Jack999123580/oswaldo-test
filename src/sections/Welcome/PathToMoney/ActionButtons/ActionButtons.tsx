import cn from 'classnames'
import type { Ref } from 'react'

import { LargeButton } from '../../../../components/LargeButton'
import styles from './ActionButtons.module.less'

type ActionButtonsProps = {
    ref?: Ref<HTMLDivElement>
}

export const ActionButtons = ({ ref }: ActionButtonsProps) => {
    return (
        <div ref={ref} className={cn(styles.buttons, 'd-flex')}>
            <LargeButton>Что за Раста такой</LargeButton>
            <div>
                <LargeButton outline>Скидки нашим</LargeButton>
            </div>
        </div>
    )
}
