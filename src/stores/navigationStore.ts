import { create } from 'zustand'

export type NavigationLinks = {
    vacanciesHref: string
    buyHref: string
}

type NavigationStore = {
    links: NavigationLinks | null
    setLinks: (links: NavigationLinks) => void
}

export const useNavigationStore = create<NavigationStore>()((set) => ({
    links: null,
    setLinks: (links) => set({ links }),
}))

export const useNavigationLinks = () => useNavigationStore((state) => state.links)
