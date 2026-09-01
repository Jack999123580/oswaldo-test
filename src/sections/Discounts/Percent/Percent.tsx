import cn from 'classnames'

import { LargeButton } from '../../../components/LargeButton'
import styles from './Percent.module.less'

export const Percent = () => {
    return (
        <div className={cn(styles.card, 'rounded-4 h-100 overflow-hidden position-relative')}>
            {/* <div>

                <div className={cn(styles.title, 'text-uppercase')}>
                    Скидки своим!
                </div>
                <div>
                    Для всех сотрудников магазина действуют персональные скидки.Пользуйтесь с удовольствием!
                </div>

                <LargeButton>
                    Устроиться в команду
                </LargeButton>

                <LargeButton outline>
                    Перейти в магазин
                </LargeButton>

            </div> */}
        </div>
    )
}
