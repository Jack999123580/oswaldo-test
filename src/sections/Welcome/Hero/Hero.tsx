import { LoginButton } from '../../../components/LoginButton'
import { useBurgerModal } from '../../../hooks'
import HeroLogo from './assets/logo.svg'
import { Burger } from './Burger'
import styles from './Hero.module.less'

export const Hero = () => {
    const openBurgerModal = useBurgerModal()

    return (
        <section
            className={`${styles.navigation} d-flex justify-content-between align-items-center h-100`}
        >
            <div className="d-flex align-items-center">
                <img src={HeroLogo} alt="Rasta Market" className={styles.logo} />
                <nav className={styles.links} aria-label="Основная навигация">
                    <a href="#vacancies">Вакансии</a>
                    <a href="#buy">Купить товар</a>
                </nav>
            </div>
            <Burger onClick={openBurgerModal} />
            <LoginButton />
        </section>
    )
}
