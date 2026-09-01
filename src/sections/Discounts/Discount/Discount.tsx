import cn from 'classnames'

import { CircleGradient } from '../../../components/CircleGradient'
import { LargeButton } from '../../../components/LargeButton'
import background from '../../AboutUs/assets/background.png'
import styles from './Discount.module.less'

export const Discount = () => {
    return (
        <div className={cn(styles.card, 'rounded-4 h-100 overflow-hidden position-relative')}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={cn(styles.title, 'text-uppercase')}>Скидки своим!</div>
                    <div className={styles.description}>
                        Для всех сотрудников магазина действуют персональные скидки.
                        <br />
                        Пользуйтесь с удовольствием!
                    </div>

                    <LargeButton className={styles.goToTeam}>Устроиться в команду</LargeButton>
                    <LargeButton outline>Перейти в магазин</LargeButton>
                </div>
                <CircleGradient className={styles.glow} blur={80} />

                <img className={cn(styles.background, 'position-absolute')} src={background} />
            </div>
        </div>
    )
}
