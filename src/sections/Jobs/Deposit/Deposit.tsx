import cn from 'classnames'

import { CircleGradient } from '../../../components/CircleGradient'
import backDollar from './assets/backDollar.svg'
import frontDollar from './assets/frontDollar.svg'
import leafBottom from './assets/leafBottom.svg'
import leafLeftMiddle from './assets/leafLeftMiddle.svg'
import leafRight from './assets/leafRight.svg'
import leafTopMiddle from './assets/leafTopMiddle.svg'
import stars from './assets/stars.svg'
import styles from './Deposit.module.less'

export const Deposit = () => {
    return (
        <div className={cn(styles.card, 'rounded-4 overflow-hidden position-relative')}>
            <CircleGradient className={cn(styles.glowTop, 'position-absolute')} blur={60} />
            <CircleGradient className={cn(styles.glowBottom, 'position-absolute')} blur={60} />
            <div className={cn(styles.content, 'position-relative')}>
                <div className={cn(styles.title, 'text-uppercase')}>По залогу от 170$</div>

                <div className={styles.subtitle}>Каждые 17$ - себесестоимость</div>

                <img className={styles.stars} src={stars} />

                <img className={styles.leafBottom} src={leafBottom} />

                <img className={styles.leafTopMiddle} src={leafTopMiddle} />

                <img className={styles.leafLeftMiddle} src={leafLeftMiddle} />

                <img className={styles.leafRight} src={leafRight} />
                <img className={styles.frontDollar} src={frontDollar} />
                <img className={styles.backDollar} src={backDollar} />

                <CircleGradient className={styles.imageGlow} blur={80} />
            </div>
        </div>
    )
}
