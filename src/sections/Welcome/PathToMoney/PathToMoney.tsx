import { ActionButtons } from './ActionButtons'
import arrowIcon from './assets/arrow.svg'
import bitcoinIcon from './assets/bitcoin.svg'
import catIcon from './assets/cat.svg'
import styles from './PathToMoney.module.less'
import { Title } from './Title'

export const PathToMoney = () => {
    return (
        <section
            className={`${styles.pathToMoney} d-flex flex-column flex-grow-1 justify-content-center align-items-center px-3`}
        >
            <div className="position-relative">
                <img src={catIcon} className={`position-absolute z-2 ${styles.cat}`} />
                <Title />
                <img src={arrowIcon} className={`position-absolute z-1 ${styles.arrow}`} alt="" />
                <div className={`position-absolute z-2 ${styles.bitcoin}`}>
                    <img src={bitcoinIcon} className="d-block" alt="" />
                </div>
            </div>
            <ActionButtons />
        </section>
    )
}
