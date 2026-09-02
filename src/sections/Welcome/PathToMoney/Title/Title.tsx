import cn from 'classnames'
import type { Ref } from 'react'

import styles from './Title.module.less'

type TitleProps = {
    lineRefs: {
        path: Ref<HTMLSpanElement | null>
        highlight: Ref<HTMLSpanElement | null>
        starts: Ref<HTMLSpanElement | null>
        here: Ref<HTMLSpanElement | null>
    }
}

export const Title = ({ lineRefs }: TitleProps) => {
    return (
        <h1
            className={cn(
                styles.title,
                'd-flex flex-column align-items-center m-0 fw-bold text-center text-uppercase text-white',
            )}
        >
            <span ref={lineRefs.path} className={styles.line}>
                Твой путь
            </span>
            <span
                ref={lineRefs.highlight}
                className={cn(
                    styles.line,
                    styles.highlight,
                    'd-inline-block text-black text-nowrap',
                )}
            >
                К большим деньгам
            </span>
            <span ref={lineRefs.starts} className={styles.line}>
                начинается
            </span>
            <span ref={lineRefs.here} className={cn(styles.line, styles.accent)}>
                здесь
            </span>
        </h1>
    )
}
