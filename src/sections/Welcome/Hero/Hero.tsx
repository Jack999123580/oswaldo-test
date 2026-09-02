import { LoginButton } from '../../../components/LoginButton'
import { useBurgerModal } from '../../../hooks'
import { useNavigationLinks } from '../../../stores'
import HeroLogo from './assets/logo.svg'
import { Burger } from './Burger'
import styles from './Hero.module.less'

export const Hero = () => {
    const openBurgerModal = useBurgerModal()
    const links = useNavigationLinks()

    // Тут можно сделать без Zustand, прокинуть в контекст. Делаю как описано в фигме
    // Ссылок на какие-либо ресурсы не имею
    return (
        <section
            className={`${styles.navigation} d-flex justify-content-between align-items-center h-100`}
        >
            <div className="d-flex align-items-center">
                <img src={HeroLogo} alt="Rasta Market" className={styles.logo} />
                <nav className={styles.links}>
                    {links ? (
                        <>
                            <a href={links.vacanciesHref}>Вакансии</a>
                            <a href={links.buyHref}>Купить товар</a>
                        </>
                    ) : (
                        <>
                            <span
                                className={`${styles.skeleton} ${styles.skeletonVacancies}`}
                                aria-hidden
                            />
                            <span
                                className={`${styles.skeleton} ${styles.skeletonBuy}`}
                                aria-hidden
                            />
                        </>
                    )}
                </nav>
            </div>
            <Burger onClick={openBurgerModal} />
            <LoginButton />
        </section>
    )
}
