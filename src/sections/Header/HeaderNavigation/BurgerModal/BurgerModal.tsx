import { Content, Overlay, Portal, Root, Title } from '@radix-ui/react-dialog'

import styles from './BurgerModal.module.less'

type BurgerModalProps = {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export const BurgerModal = ({ open, onOpenChange }: BurgerModalProps) => {
    return (
        <Root open={open} onOpenChange={onOpenChange}>
            <Portal>
                <Overlay className={styles.overlay} />
                <Content className={styles.panel}>
                    <Title className={styles.title}>title</Title>
                    <nav className={styles.nav}>
                        <a href="#item-1">пункт 1</a>
                        <a href="#item-2">пункт 2</a>
                    </nav>
                </Content>
            </Portal>
        </Root>
    )
}
