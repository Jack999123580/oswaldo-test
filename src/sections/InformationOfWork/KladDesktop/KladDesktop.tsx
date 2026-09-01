import cn from 'classnames'

import { CircleGradient } from '../../../components/CircleGradient'
import workAnyPlace from '../assets/workAnyPlace.png' // ломается при экспорте в svg
import { CardOfWork } from '../CardOfWork'
import styles from './KladDesktop.module.less'

export const KladDesktop = () => {
    return (
        <CardOfWork
            title={'Работай в любых местах,\nвсе в твоих руках'}
            description={'Например, клады прячут в парках, под деревьями и там, где нет камер'}
            className="d-none d-lg-flex"
        >
            <div className="d-flex justify-content-center">
                <img className={cn(styles.background, 'position-absolute')} src={workAnyPlace} />
            </div>
            <CircleGradient blur={80} className={styles.glowTop} />
            <CircleGradient blur={80} className={styles.glowBottom} />
        </CardOfWork>
    )
}
