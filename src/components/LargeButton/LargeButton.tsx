import cn from 'classnames'
import type { FC, ReactNode } from 'react'

import { Button } from '../Button'
import chevron from './assets/chevron.svg'
import styles from './LargeButton.module.less'

type LargeButtonProps = {
    children: ReactNode
    outline?: boolean
    className?: string
    showChevron?: boolean
    onClick?: () => void
}

export const LargeButton: FC<LargeButtonProps> = ({
    children,
    outline,
    className,
    showChevron,
    onClick,
}) => {
    return (
        <Button onClick={onClick} outline={outline} className={cn(styles.largeButton, className)}>
            {children}
            {showChevron && <img className={styles.chevron} src={chevron} />}
        </Button>
    )
}
