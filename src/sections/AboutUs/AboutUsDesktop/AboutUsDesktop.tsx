import cn from 'classnames'

import { CircleGradient } from '../../../components/CircleGradient'
import { LargeButton } from '../../../components/LargeButton'
import background from '../assets/background.png'
import styles from './AboutUsDesktop.module.less'

export const AboutUsDesktop = () => {
    return (
        <div className={'d-none d-lg-block'}>
            <CircleGradient className={cn(styles.glow, 'position-absolute')} blur={80} />
            <img src={background} className={'position-absolute'} alt="" />
            <div className={cn(styles.content, 'position-relative')}>
                <p className={cn(styles.title, 'text-uppercase')}>О нас</p>
                <p className={styles.description}>
                    RM команда которая старается минизировать вред вашему здоровью предоставляя
                    максимально чистый и натуральный продукт.
                </p>
                <p className={styles.description}>
                    Нам важно качество от выбора семян и сортов до реализации, поэтому мы в поисках
                    надежного персонала с мозгами.
                </p>
                <p className={styles.description}>
                    Мы всегда рады видеть новых сотрудников, но принимаем не всех
                </p>
                <div>
                    <LargeButton className={styles.goToTeam}>Устроиться в команду</LargeButton>
                    <LargeButton outline>Задать вопрос</LargeButton>
                </div>
            </div>
        </div>
    )
}
