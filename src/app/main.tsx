import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { SnackbarProvider } from 'notistack'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@styles/bootstrap.scss'

import '@styles/index.less'

import App from './App'

const container = document.getElementById('root')

if (!container) {
    throw new Error('React root container not found')
}

const root = createRoot(container)

root.render(
    <StrictMode>
        <SnackbarProvider autoHideDuration={5000}>
            <App />
        </SnackbarProvider>
    </StrictMode>,
)
