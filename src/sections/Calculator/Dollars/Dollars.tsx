import cn from 'classnames'
import type { Ref } from 'react'

import { CircleGradient } from '../../../components/CircleGradient'
import { formatNumberWithSpaces } from '../../../utils'
import dollarImage from './assets/dollar.svg'
import leafCenter from './assets/leafCenter.svg'
import leafFront from './assets/leafFront.svg'
import leafLeftBottom from './assets/leafLeftBottom.svg'
import leafMiddle from './assets/leafMiddle.svg'
import leafTopRight from './assets/leafTopRight.svg'
import styles from './Dollars.module.less'

type DollarsProps = {
    income: number
    ref?: Ref<HTMLDivElement>
}

export const Dollars = ({ income, ref }: DollarsProps) => {
    return (
        <div ref={ref} className={styles.result}>
            <CircleGradient blur={80} className={styles.glowFront} />
            <img src={leafTopRight} alt="" className={styles.leafTopRight} />
            <img src={leafCenter} alt="" className={styles.leafCenter} />
            <img src={leafLeftBottom} alt="" className={styles.leafLeftBottom} />
            <img src={leafMiddle} alt="" className={styles.leafMiddle} />
            <img src={leafFront} alt="" className={styles.leafFront} />
            <img src={dollarImage} alt="" className={styles.dollar} />
            <div className={styles.glowContainer}>
                <CircleGradient blur={80} className={styles.glow} />
            </div>
            <p className={cn(styles.resultLabel, 'mb-0')}>Ты заработаешь</p>
            <p className={cn(styles.resultValue, 'fs-2 fs-lg-1 mb-0')}>
                {formatNumberWithSpaces(income)} ₽
            </p>
        </div>
    )
}
