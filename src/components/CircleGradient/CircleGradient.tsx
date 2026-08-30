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

    return (
        <span
            className={`${styles.circle}${className ? ` ${className}` : ''}`}
            style={gradientStyle}
            {...props}
        />
    )
}
