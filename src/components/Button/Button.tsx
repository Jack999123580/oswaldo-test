import cn from 'classnames'
import type { ButtonHTMLAttributes } from 'react'

import styles from './Button.module.less'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    outline?: boolean
}

export const Button = ({
    children,
    outline = false,
    className,
    type = 'button',
    ...props
}: ButtonProps) => {
    return (
        <button
            type={type}
            className={cn(styles.button, outline ? styles.outline : styles.primary, className)}
            {...props}
        >
            {children}
        </button>
    )
}
