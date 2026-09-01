import { CircleGradient } from '../../../components/CircleGradient'
import leafLeft from './assets/leafLeft.svg'
import leafMiddle from './assets/leafMiddle.svg'
import leafTop from './assets/leafTop.svg'
import styles from './KladMobile.module.less'

export const KladMobile = () => {
    return (
        <div className={styles.container}>
            <img className={styles.leafLeft} src={leafLeft} alt="" />
            <img className={styles.leafTop} src={leafTop} alt="" />
            <img className={styles.leafMiddle} src={leafMiddle} alt="" />

            <CircleGradient className={styles.glow} blur={134} />
        </div>
    )
}
