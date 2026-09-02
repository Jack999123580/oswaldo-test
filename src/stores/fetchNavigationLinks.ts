import { useNavigationStore } from './navigationStore'

const MOCK_NAVIGATION_LINKS = {
    vacanciesHref: '#vacanciesHref',
    buyHref: '#buyHref',
}

export const fetchNavigationLinks = () => {
    return window.setTimeout(() => {
        useNavigationStore.getState().setLinks(MOCK_NAVIGATION_LINKS)
    }, 3000)
}
