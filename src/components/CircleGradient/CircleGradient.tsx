import cn from 'classnames'
import type { FC, HTMLAttributes } from 'react'

import styles from './CircleGradient.module.less'

type CircleGradientProps = {
    blur: number
    width?: number
    height?: number
} & HTMLAttributes<HTMLSpanElement>

export const CircleGradient: FC<CircleGradientProps> = ({
    blur,
    width,
    height,
    className,
    style,
    ...props
}) => {
    const gradientStyle = {
        '--circle-gradient-blur-prop': `${blur}px`,
        ...(width && { width }),
        ...(height && { height }),
        ...style,
    }

    return <span className={cn(styles.circle, className)} style={gradientStyle} {...props} />
}
