import { createContext, useCallback, useMemo, useState, type PropsWithChildren } from 'react'

import { BurgerModal } from '../sections/Welcome/Hero/BurgerModal/BurgerModal'

type BurgerModalContextValue = {
    openBurgerModal: () => void
}

export const BurgerModalContext = createContext<BurgerModalContextValue>({
    openBurgerModal: () => {},
})

export const BurgerModalProvider = ({ children }: PropsWithChildren) => {
    const [open, setOpen] = useState(false)
    const openBurgerModal = useCallback(() => setOpen(true), [])
    const value = useMemo(() => ({ openBurgerModal }), [openBurgerModal])

    return (
        <BurgerModalContext.Provider value={value}>
            {children}
            <BurgerModal open={open} onOpenChange={setOpen} />
        </BurgerModalContext.Provider>
    )
}
