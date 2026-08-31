import cn from 'classnames'
import type { CSSProperties, FC, HTMLAttributes } from 'react'

import styles from './CircleGradient.module.less'

type CircleGradientProps = {
    blur: number
    className?: string
} & HTMLAttributes<HTMLSpanElement>

export const CircleGradient: FC<CircleGradientProps> = ({ blur, className }) => {
    const gradientStyle = {
        '--circle-gradient-blur-prop': `${blur}px`,
    } as CSSProperties

    return <span className={cn(styles.circle, className)} style={gradientStyle} />
}
