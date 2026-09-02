import cn from 'classnames'

import { Deposit } from './Deposit'
import { Documents } from './Documents'
import styles from './Jobs.module.less'
import { Title } from './Title'
import { useJobsSectionAnimation } from './useJobsSectionAnimation'

export const Jobs = () => {
    const { sectionRef, titleRefs, depositRef, documentsRef } = useJobsSectionAnimation()

    return (
        <section ref={sectionRef} className="container py-4 py-lg-5">
            <div className="d-flex flex-column gap-3 gap-lg-4">
                <Title subtitleRef={titleRefs.subtitle} titleRef={titleRefs.title} />
                <div className="row g-3 d-flex justify-content-lg-center">
                    <div ref={depositRef} className={cn(styles.deps, 'col-12 col-lg-5')}>
                        <Deposit />
                    </div>
                    <div ref={documentsRef} className="col-12 col-lg-5">
                        <Documents />
                    </div>
                </div>
            </div>
        </section>
    )
}
