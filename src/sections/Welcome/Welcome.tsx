import { BurgerModalProvider } from '../../contexts'
import { PathToMoney } from '../PathToMoney'
import { Hero } from './Hero'
import styles from './Welcome.module.less'

export const Welcome = () => {
    return (
        <BurgerModalProvider>
            <section className={styles.header}>
                <div className={styles.background} />
                <div className={styles.content}>
                    <Hero />
                    <PathToMoney />
                </div>
            </section>
        </BurgerModalProvider>
    )
}
