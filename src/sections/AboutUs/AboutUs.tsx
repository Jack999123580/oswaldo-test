import cn from 'classnames'

import styles from './AboutUs.module.less'
import aboutUs from './assets/aboutUs.svg'

export const AboutUs = () => {
    return (
        <section className="container py-4 py-lg-5">
            <div className="row g-3">
                <div className="col-12 col-lg-4 order-1 order-lg-2">
                    <img className="w-100 d-block rounded-4" src={aboutUs} alt="" />
                </div>
                <div className="col-12 col-lg-8 order-2 order-lg-1">
                    <div className={cn(styles.card, 'rounded-4 h-100')} />
                </div>
            </div>
        </section>
    )
}
