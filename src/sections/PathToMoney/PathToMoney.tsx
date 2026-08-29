import { ActionButtons } from './ActionButtons'
import styles from './PathToMoney.module.less'
import { Title } from './Title'

export const PathToMoney = () => {
    return (
        <section className={`${styles.pathToMoney} d-flex flex-column align-items-center px-3`}>
            <Title />
            <ActionButtons />
        </section>
    )
}
