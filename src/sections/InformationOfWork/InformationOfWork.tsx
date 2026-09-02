import cn from 'classnames'

import { CircleGradient } from '../../components/CircleGradient'
import arrowIcon from './assets/arrow.svg'
import hand from './assets/hand.png' // ломается при экспорте в svg из-за заливок и масок
import spaceStars from './assets/spaceStars.svg' // в макете фигмы выглядит норм, но в превью в фигме не так, как смог сгладил углы
import { CardOfWork } from './CardOfWork'
import styles from './InformationOfWork.module.less'
import { KladDesktop } from './KladDesktop'
import { KladMobile } from './KladModbile'
import { Title } from './Title'
import { useInformationOfWorkSectionAnimation } from './useInformationOfWorkSectionAnimation'

export const InformationOfWork = () => {
    const { sectionRef, cardRefs } = useInformationOfWorkSectionAnimation()

    return (
        <section ref={sectionRef} className="container py-4 py-lg-5">
            <div className={cn(styles.row, 'row g-3 justify-content-lg-center')}>
                <div ref={cardRefs.first} className="col-12 col-lg-auto  d-lg-block">
                    <KladDesktop />
                    <KladMobile />
                </div>
                <div ref={cardRefs.second} className="col-12 col-lg-auto">
                    <CardOfWork
                        title={'Обучаем с нуля — всё покажем и расскажем'}
                        description={
                            'Мы давно в деле, поэтому научим вас зарабатывать много и безопасно'
                        }
                    >
                        <img
                            className={cn(styles.spaceStars, 'position-absolute')}
                            src={spaceStars}
                        />
                        <img
                            className={cn(styles.background, styles.hand, 'position-absolute')}
                            src={hand}
                        />
                        <CircleGradient blur={80} className={styles.glowMiddleCardTop} />
                        <CircleGradient blur={80} className={styles.glowMiddleCardBottom} />
                    </CardOfWork>
                </div>
                <div ref={cardRefs.third} className="col-12 col-lg-auto">
                    <CardOfWork
                        title={'Нет графика работы'}
                        description={'Поэтому можно совмещать работу и учебу с работой курьером'}
                    >
                        <div
                            className={cn(
                                styles.headline,
                                'd-flex justify-content-center align-items-center',
                            )}
                        >
                            <div className={cn(styles.headlineBlock, 'position-relative')}>
                                <Title />
                                <img
                                    src={arrowIcon}
                                    className={cn(styles.arrow, 'position-absolute z-1')}
                                    alt=""
                                />
                            </div>
                        </div>
                        <CircleGradient blur={80} className={styles.glowLastCardTop} />
                    </CardOfWork>
                </div>
            </div>
        </section>
    )
}
