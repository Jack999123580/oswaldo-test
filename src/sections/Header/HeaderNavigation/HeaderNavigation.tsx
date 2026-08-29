import HeroLogo from './assets/logo.svg'
import { Burger } from './Burger'
import styles from './HeaderNavigation.module.less'

export const HeaderNavigation = () => {
    return (
        <header className={styles.navigation}>
            <div className="container-fluid px-2.5">
                <div className="d-flex justify-content-between align-items-center">
                    <img src={HeroLogo} alt="Rasta Market" className={styles.logo} />
                    <Burger />
                </div>
            </div>
        </header>
    )
}
