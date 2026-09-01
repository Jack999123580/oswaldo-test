import type { FC } from 'react'

import { LargeButton } from '../LargeButton'
import styles from './LoginButton.module.less'

type LoginButtonProps = {
    onClick: () => void
}

export const LoginButton: FC<LoginButtonProps> = ({ onClick }) => {
    return (
        <LargeButton onClick={onClick} className={styles.login}>
            Войти
        </LargeButton>
    )
}
