import cn from 'classnames'

import { CircleGradient } from '../../../components/CircleGradient'
import background from './assets/background.png'
import bluePassport from './assets/bluePassport.svg'
import leafBack from './assets/leafBack.svg'
import leafBig from './assets/leafBig.svg'
import leafRight from './assets/leafRight.svg'
import leafTop from './assets/leafTop.svg'
import redPassport from './assets/redPassport.svg'
import styles from './Documents.module.less'

export const Documents = () => {
    return (
        <div className={cn(styles.card, 'rounded-4 h-100 overflow-hidden position-relative')}>
            <img src={background} className={cn(styles.background, 'position-absolute')} alt="" />
            <div className={styles.visual}>
                <img className={styles.leafBig} src={leafBig} />
                <img className={styles.leafTop} src={leafTop} />
                <img className={styles.leafBack} src={leafBack} />
                <img className={styles.bluePassport} src={bluePassport} />
                <img className={styles.redPassport} src={redPassport} />

                <img className={styles.leafRight} src={leafRight} />
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.info}>
                    <div className={cn(styles.title, 'text-uppercase')}>По документам</div>
                    <div className={styles.description}>
                        Нет залога? Отправь фото своих документов и прописку
                    </div>
                </div>
            </div>

            <CircleGradient className={cn(styles.leftGlow, 'position-absolute')} blur={80} />
            <CircleGradient className={cn(styles.rightGlow, 'position-absolute')} blur={120} />
            <CircleGradient className={cn(styles.passportGlow, 'position-absolute')} blur={120} />
        </div>
    )
}
