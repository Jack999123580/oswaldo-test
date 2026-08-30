import type { FC } from 'react'

import { Button } from '../Button'
import styles from './LoginButton.module.less'

type LoginButtonProps = {
    onClick: () => void
}

export const LoginButton: FC<LoginButtonProps> = ({ onClick }) => {
    return (
        <Button onClick={onClick} className={styles.login}>
            Войти
        </Button>
    )
}
