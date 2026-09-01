import cn from 'classnames'

import { CircleGradient } from '../../../components/CircleGradient'
import { LargeButton } from '../../../components/LargeButton'
import background from '../assets/background.png'
import styles from './AboutUsMobile.module.less'

export const AboutUsMobile = () => {
    return (
        <div className="d-lg-none">
            <CircleGradient blur={80} className={cn(styles.glow, 'position-absolute')} />
            <img
                className={cn(styles.background, 'position-absolute')}
                width={500}
                height={300}
                src={background}
            />
            <p className={cn(styles.title, 'text-uppercase')}>
                Кто такой <br />
                Rasta Market?
            </p>
            <p className={styles.description}>
                Мы магазин из Бишкека, который предлагает <br /> высокооплачиваемую работу без
                сложных <br />
                задач, для тех кто хочет <br /> стабильно зарабатывать без лишнего стресса.
            </p>
            <div className={styles.actions}>
                <LargeButton className={styles.goToTeam}>Устроиться в команду</LargeButton>
                <LargeButton outline>Задать вопрос</LargeButton>
            </div>
        </div>
    )
}
