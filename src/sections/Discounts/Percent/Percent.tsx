import cn from 'classnames'

import { CircleGradient } from '../../../components/CircleGradient'
import background from './assets/arrow.svg'
import percentBottom from './assets/percentBottom.svg'
import percentLeft from './assets/percentLeft.svg'
import percentTop from './assets/percentTop.svg'
import styles from './Percent.module.less'

export const Percent = () => {
    return (
        <div className={cn(styles.card, 'rounded-4 h-100 overflow-hidden position-relative')}>
            <img className={styles.percentLeft} src={percentLeft} />
            <img className={styles.percentTop} src={percentTop} />
            <img className={styles.percentBottom} src={percentBottom} />
            <img className={styles.background} src={background} />

            <div className={styles.content}>
                <div className={cn('text-uppercase')}>Процент</div>
                <div className={cn(styles.dependencies, 'text-uppercase')}>Зависит</div>
                <div className={cn('text-uppercase')}>От опыта</div>
            </div>

            <CircleGradient className={styles.glow} blur={40} />
        </div>
    )
}
