import { useContext } from 'react'

import { BurgerModalContext } from '../contexts/BurgerModalContext'

export const useBurgerModal = () => {
    const { openBurgerModal } = useContext(BurgerModalContext)

    return openBurgerModal
}
