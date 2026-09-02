import cn from 'classnames'

import styles from './AboutUs.module.less'
import { AboutUsDesktop } from './AboutUsDesktop'
import { AboutUsMobile } from './AboutUsMobile'
import aboutUs from './assets/aboutUs.svg'
import { useAboutUsSectionAnimation } from './useAboutUsSectionAnimation'

export const AboutUs = () => {
    const { sectionRef, imageRef, cardRef } = useAboutUsSectionAnimation()

    return (
        <section ref={sectionRef} className="container py-4 py-lg-5">
            <div className="row g-3">
                <div ref={imageRef} className="col-12 col-lg-4 order-1 order-lg-2">
                    <img
                        className={cn(styles.background, 'w-100 d-block rounded-4 h-100')}
                        src={aboutUs}
                        alt=""
                    />
                </div>
                <div ref={cardRef} className="col-12 col-lg-8 order-2 order-lg-1">
                    <div
                        className={cn(
                            styles.card,
                            'rounded-4 h-100 overflow-hidden position-relative ',
                        )}
                    >
                        {/* Мобильная версия */}
                        <AboutUsMobile />
                        {/* Десктопная версия */}
                        <AboutUsDesktop />
                    </div>
                </div>
            </div>
        </section>
    )
}
