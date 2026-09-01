import cn from 'classnames'
import type { FC, ReactNode } from 'react'

import styles from './CardOfWork.module.less'

type CardOfWorkProps = {
    title: string
    description: string
    children?: ReactNode
    className?: string
}

export const CardOfWork: FC<CardOfWorkProps> = ({ title, description, className, children }) => {
    return (
        <section className={cn(styles.card, className, 'd-flex flex-column overflow-hidden h-100')}>
            {children && <div className={styles.effects}>{children}</div>}
            <div className={cn(styles.visual, 'flex-grow-1')} />
            <div className={cn(styles.content, 'd-flex flex-column gap-2 p-3 p-lg-4')}>
                <h3 className={cn(styles.title, 'mb-0')}>{title}</h3>
                <p className={cn(styles.description, 'mb-0')}>{description}</p>
            </div>
        </section>
    )
}
