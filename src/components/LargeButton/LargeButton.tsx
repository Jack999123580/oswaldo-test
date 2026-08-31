import cn from 'classnames'
import type { FC, ReactNode } from 'react'

import { Button } from '../Button'
import styles from './LargeButton.module.less'

type LargeButtonProps = {
    children: ReactNode
    outline?: boolean
    className?: string
}

export const LargeButton: FC<LargeButtonProps> = ({ children, outline, className }) => {
    return (
        <Button outline={outline} className={cn(styles.largeButton, className)}>
            {children}
        </Button>
    )
}
