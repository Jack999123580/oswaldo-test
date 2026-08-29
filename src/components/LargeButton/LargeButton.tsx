import type { FC, ReactNode } from 'react'

import { Button } from '../Button'
import styles from './LargeButton.module.less'

type LargeButtonProps = {
    children: ReactNode
    outline?: boolean
}

export const LargeButton: FC<LargeButtonProps> = ({ children, outline }) => {
    return (
        <Button outline={outline} className={styles.largeButton}>
            {children}
        </Button>
    )
}
