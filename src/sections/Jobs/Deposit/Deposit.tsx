import cn from 'classnames'

import { CircleGradient } from '../../../components/CircleGradient'
import backDollar from './assets/backDollar.svg'
import background from './assets/background.png'
import frontDollar from './assets/frontDollar.svg'
import leafBottom from './assets/leafBottom.svg'
import leafLeftMiddle from './assets/leafLeftMiddle.svg'
import leafRight from './assets/leafRight.svg'
import leafTopMiddle from './assets/leafTopMiddle.svg'
import stars from './assets/stars.svg'
import styles from './Deposit.module.less'

export const Deposit = () => {
    return (
        <div className={cn(styles.card, 'rounded-4 h-100 overflow-hidden position-relative')}>
            <CircleGradient className={cn(styles.glowTop, 'position-absolute')} blur={60} />
            <CircleGradient className={cn(styles.glowBottom, 'position-absolute')} blur={60} />
            <img src={background} className={cn(styles.background, 'position-absolute')} alt="" />
            <img className={cn(styles.stars, 'position-absolute')} src={stars} alt="" />

            <div className={cn(styles.title, 'text-uppercase')}>По залогу от 170$</div>
            <div className={styles.subtitle}>Каждые 17$ - себесестоимость</div>

            <div className={styles.visual}>
                <img className={styles.leafTopMiddle} src={leafTopMiddle} alt="" />
                <img className={styles.backDollar} src={backDollar} alt="" />
                <img className={styles.leafLeftMiddle} src={leafLeftMiddle} alt="" />
                <img className={styles.frontDollar} src={frontDollar} alt="" />
                <img className={styles.leafRight} src={leafRight} alt="" />
                <img className={styles.leafBottom} src={leafBottom} alt="" />
                <CircleGradient className={styles.imageGlow} blur={80} />
            </div>
        </div>
    )
}
