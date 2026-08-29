import { ActionButtons } from './ActionButtons'
import arrowIcon from './assets/arrow.svg'
import bitcoinIcon from './assets/bitcoin.svg'
import catIcon from './assets/cat.svg'
import styles from './PathToMoney.module.less'
import { Title } from './Title'

export const PathToMoney = () => {
    return (
        <section className={`${styles.pathToMoney} d-flex flex-column align-items-center px-3`}>
            <div className={styles.headline}>
                <img src={catIcon} className={styles.cat} />
                <Title />
                <img src={arrowIcon} className={styles.arrow} alt="" />
                <div className={styles.bitcoin}>
                    <img src={bitcoinIcon} alt="" />
                </div>
            </div>
            <ActionButtons />
        </section>
    )
}
