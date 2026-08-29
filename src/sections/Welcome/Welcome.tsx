import { BurgerModalProvider } from '../../contexts'
import { Hero } from './Hero'
import { PathToMoney } from './PathToMoney'
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
