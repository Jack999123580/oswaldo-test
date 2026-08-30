import cn from 'classnames'

import { ActionButtons } from './ActionButtons'
import arrowIcon from './assets/arrow.svg'
import bitcoinIcon from './assets/bitcoin.svg'
import catIcon from './assets/cat.svg'
import styles from './PathToMoney.module.less'
import { Title } from './Title'

export const PathToMoney = () => {
    return (
        <section
            className={cn(
                styles.pathToMoney,
                'd-flex flex-column flex-grow-1 justify-content-center align-items-center px-3',
            )}
        >
            <div className="position-relative">
                <img src={catIcon} className={cn(styles.cat, 'position-absolute z-2')} />
                <Title />
                <img src={arrowIcon} className={cn(styles.arrow, 'position-absolute z-1')} alt="" />
                <div className={cn(styles.bitcoin, 'position-absolute z-2')}>
                    <img src={bitcoinIcon} className="d-block" alt="" />
                </div>
            </div>
            <ActionButtons />
        </section>
    )
}
