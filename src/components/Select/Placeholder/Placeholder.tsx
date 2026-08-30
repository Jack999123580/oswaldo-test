import type { ReactNode } from 'react'

import styles from './Placeholder.module.less'

type PlaceholderProps = {
    children?: ReactNode
}

export const Placeholder = ({ children }: PlaceholderProps) => {
    return <span className={styles.placeholder}>{children}</span>
}
