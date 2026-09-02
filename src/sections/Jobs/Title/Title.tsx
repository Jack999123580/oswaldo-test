import cn from 'classnames'
import type { Ref } from 'react'

import styles from './Title.module.less'

type TitleProps = {
    subtitleRef?: Ref<HTMLParagraphElement | null>
    titleRef?: Ref<HTMLHeadingElement | null>
}

export const Title = ({ subtitleRef, titleRef }: TitleProps) => {
    return (
        <div className="d-flex flex-column align-items-center text-center gap-2">
            <p ref={subtitleRef} className={cn(styles.subtitle, 'mb-0')}>
                Выбери 1 из двух вариантов трудоустройства
            </p>
            <h2
                ref={titleRef}
                className={cn(styles.title, 'mb-0 fw-bold text-uppercase text-white')}
            >
                Устроиться можно
            </h2>
        </div>
    )
}
