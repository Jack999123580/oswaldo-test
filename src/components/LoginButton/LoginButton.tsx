import { LargeButton } from '../LargeButton'
import styles from './LoginButton.module.less'

export const LoginButton = () => {
    const handleLogin = () => {}

    return (
        <LargeButton onClick={handleLogin} className={styles.login}>
            Войти
        </LargeButton>
    )
}
