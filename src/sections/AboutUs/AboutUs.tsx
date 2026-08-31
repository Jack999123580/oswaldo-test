import cn from 'classnames'

import { CircleGradient } from '../../components/CircleGradient'
import { LargeButton } from '../../components/LargeButton'
import styles from './AboutUs.module.less'
import aboutUs from './assets/aboutUs.svg'
import background from './assets/background.png'

export const AboutUs = () => {
    return (
        <section className="container py-4 py-lg-5">
            <div className="row g-3">
                <div className="col-12 col-lg-4 order-1 order-lg-2">
                    <img className="w-100 d-block rounded-4" src={aboutUs} alt="" />
                </div>
                <div className="col-12 col-lg-8 order-2 order-lg-1">
                    <div
                        className={cn(
                            styles.card,
                            'rounded-4 h-100 overflow-hidden position-relative ',
                        )}
                    >
                        {/* Мобильная версия */}
                        <div className="d-lg-none">
                            <CircleGradient
                                blur={80}
                                className={cn(styles.glow, 'position-absolute')}
                            />
                            <img
                                className={cn(styles.background, 'position-absolute')}
                                width={500}
                                height={300}
                                src={background}
                            />
                            <p className={cn(styles.title, 'text-uppercase')}>
                                Кто такой <br />
                                Rasta Market
                            </p>
                            <p className={styles.description}>
                                Мы магазин из Бишкека, который предлагает высокооплачиваемую работу
                                без сложных задач, для тех кто хочет стабильно зарабатывать без
                                лишнего стресса.
                            </p>
                            <div className={styles.actions}>
                                <LargeButton className={styles.goToTeam}>
                                    Устроиться в команду
                                </LargeButton>
                                <LargeButton outline>Задать вопрос</LargeButton>
                            </div>
                        </div>
                        {/* ------------------- */}
                        {/* Десктопная версия */}
                    </div>
                </div>
            </div>
        </section>
    )
}
