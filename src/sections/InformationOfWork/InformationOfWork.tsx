import cn from 'classnames'

import { CardOfWork } from '../../components/CardOfWork'
import { CircleGradient } from '../../components/CircleGradient'
import workAnyPlace from './assets/workAnyPlace.png' // ломается при экспорте в svg
import styles from './InformationOfWork.module.less'

export const InformationOfWork = () => {
    return (
        <section className="container py-4 py-lg-5">
            <div className={cn(styles.row, 'row g-3 justify-content-lg-center')}>
                <div className="col-12 col-lg-auto d-none d-lg-block">
                    <CardOfWork
                        title={'Оставляй клады — в любых удобных местах'}
                        description={
                            'Например, клады прячут в лифтах, в парках под деревьями и там, где нет камер'
                        }
                    >
                        {' '}
                        <div className="d-flex justify-content-center">
                            <img
                                className={cn(styles.workAnyPlace, 'position-absolute')}
                                src={workAnyPlace}
                            ></img>
                        </div>
                        <CircleGradient blur={80} className={styles.glowTop} />
                        <CircleGradient blur={80} className={styles.glowBottom} />
                    </CardOfWork>
                </div>
                <div className="col-12 col-lg-auto">
                    <CardOfWork
                        title={'Обучаем с нуля — всё покажем и расскажем'}
                        description={
                            'Мы давно в деле, поэтому научим вас зарабатывать много и безопасно'
                        }
                    >
                        <CircleGradient blur={80} className={styles.glowMiddleCardTop} />
                        <CircleGradient blur={80} className={styles.glowMiddleCardBottom} />
                    </CardOfWork>
                </div>
                <div className="col-12 col-lg-auto">
                    <CardOfWork
                        title={'Нет графика работы'}
                        description={'Поэтому можно совмещать работу и учебу с работой курьером'}
                    />
                </div>
            </div>
        </section>
    )
}
