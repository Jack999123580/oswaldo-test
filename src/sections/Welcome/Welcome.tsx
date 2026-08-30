import cn from 'classnames'

import { BurgerModalProvider } from '../../contexts'
import { Hero } from './Hero'
import { PathToMoney } from './PathToMoney'
import styles from './Welcome.module.less'

export const Welcome = () => {
    return (
        <BurgerModalProvider>
            <section className={styles.header}>
                <div className={styles.background} />
                <div className={cn(styles.content, 'position-relative w-100 d-flex flex-column')}>
                    <Hero />
                    <PathToMoney />
                </div>
            </section>
        </BurgerModalProvider>
    )
}
