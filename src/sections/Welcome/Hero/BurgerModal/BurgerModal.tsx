import { Content, Overlay, Portal, Root, Title } from '@radix-ui/react-dialog'

import { useNavigationLinks } from '../../../../stores'
import styles from './BurgerModal.module.less'

type BurgerModalProps = {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export const BurgerModal = ({ open, onOpenChange }: BurgerModalProps) => {
    const links = useNavigationLinks()

    return (
        <Root open={open} onOpenChange={onOpenChange}>
            <Portal>
                <Overlay className={styles.overlay} />
                <Content className={styles.panel}>
                    <Title className={styles.title}>Меню</Title>
                    <nav className={styles.nav} aria-busy={!links}>
                        {links ? (
                            <>
                                <a href={links.vacanciesHref}>Вакансии</a>
                                <a href={links.buyHref}>Купить товар</a>
                            </>
                        ) : (
                            <span className={styles.loader}>Загрузка</span>
                        )}
                    </nav>
                </Content>
            </Portal>
        </Root>
    )
}
