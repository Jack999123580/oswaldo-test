import cn from 'classnames'

import { ActionButtons } from './ActionButtons'
import arrowIcon from './assets/arrow.svg'
import bitcoinIcon from './assets/bitcoin.svg'
import catIcon from './assets/cat.svg'
import styles from './PathToMoney.module.less'
import { Title } from './Title'
import { useMainScreenAnimation } from './useMainScreenAnimation'

export const PathToMoney = () => {
    const { catRef, arrowRef, bitcoinRef, buttonsRef, lineRefs } = useMainScreenAnimation()

    return (
        <section
            className={cn(
                styles.pathToMoney,
                'd-flex flex-column flex-grow-1 justify-content-center align-items-center px-3',
            )}
        >
            <div className="position-relative">
                <span ref={catRef} className={cn(styles.cat, 'position-absolute z-2')}>
                    <img src={catIcon} alt="" />
                </span>
                <Title lineRefs={lineRefs} />
                <span ref={arrowRef} className={cn(styles.arrow, 'position-absolute z-1')}>
                    <img src={arrowIcon} alt="" />
                </span>
                <div ref={bitcoinRef} className={cn(styles.bitcoin, 'position-absolute z-2')}>
                    <img src={bitcoinIcon} className="d-block" alt="" />
                </div>
            </div>
            <ActionButtons ref={buttonsRef} />
        </section>
    )
}
