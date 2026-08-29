import { BurgerModalProvider } from '../../contexts'
import styles from './Header.module.less'
import { HeaderNavigation } from './HeaderNavigation'

export const Header = () => {
    return (
        <BurgerModalProvider>
            <section className={styles.header}>
                <div className={styles.background} />
                <div className={styles.content}>
                    <HeaderNavigation />
                </div>
            </section>
        </BurgerModalProvider>
    )
}
