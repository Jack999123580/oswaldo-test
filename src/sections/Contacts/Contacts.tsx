import cn from 'classnames'

import { LargeButton } from '../../components/LargeButton'
import background from './assets/background.svg'
import styles from './Contacts.module.less'

export const Contacts = () => {
    return (
        <section className={cn(styles.content, 'container overflow-hidden position-relative')}>
            <img className={'position-absolute'} src={background} alt="" />

            <div className={styles.card}>
                <div className={styles.title}>Связаться</div>
                <div className={styles.panel}>
                    <div className={styles.links}>
                        <LargeButton className={cn(styles.actionButton, 'd-lg-none')}>
                            <span className="d-lg-none">Телеграм</span>
                        </LargeButton>

                        <LargeButton className={cn(styles.actionButton, 'd-none d-lg-block')}>
                            Бот
                        </LargeButton>

                        <LargeButton
                            outline
                            className={cn(styles.actionButton, 'd-none d-lg-block')}
                        >
                            Резерв бот
                        </LargeButton>

                        <LargeButton
                            outline
                            className={cn(styles.actionButton, styles.support, 'd-none d-lg-block')}
                        >
                            Поддержка
                        </LargeButton>

                        <LargeButton className="d-lg-none" outline>
                            Элемент
                        </LargeButton>
                    </div>
                    <div className={styles.divider} />
                    <LargeButton showChevron>Перейти в магазин</LargeButton>
                </div>
            </div>
        </section>
    )
}
