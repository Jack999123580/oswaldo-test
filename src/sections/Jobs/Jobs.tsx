import cn from 'classnames'

import { Deposit } from './Deposit'
import { Documents } from './Documents'
import styles from './Jobs.module.less'
import { Title } from './Title'

export const Jobs = () => {
    return (
        <section className="container py-4 py-lg-5">
            <div className="d-flex flex-column gap-3 gap-lg-4">
                <Title />
                <div className="row g-3 d-flex justify-content-lg-center">
                    <div className={cn(styles.deps, 'col-12 col-lg-5')}>
                        <Deposit />
                    </div>
                    <div className="col-12 col-lg-5">
                        <Documents />
                    </div>
                </div>
            </div>
        </section>
    )
}
