import { CircleGradient } from '../../../components/CircleGradient'
import { CardOfWork } from '../CardOfWork'
import leafLeft from './assets/leafLeft.svg'
import leafMiddle from './assets/leafMiddle.svg'
import leafTop from './assets/leafTop.svg'
import styles from './KladMobile.module.less'

export const KladMobile = () => {
    return (
        <CardOfWork
        title={'Оставляй клады —\n в любых удобных местах'}
        description={
            'Например, клады прячут в лифтах, в парках \n под деревьями и там, где нет камер'
        }
        className="d-lg-none"
    >

        <div className={styles.container}>
            <img className={styles.leafLeft} src={leafLeft} alt="" />
            <img className={styles.leafTop} src={leafTop} alt="" />
            <img className={styles.leafMiddle} src={leafMiddle} alt="" />

            <CircleGradient className={styles.glow} blur={134} />
        </div>
        </CardOfWork>

    )
}
