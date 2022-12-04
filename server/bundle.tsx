import { App } from './app'
import { hydrateRoot } from 'react-dom/client'

const elementById = document.getElementById('root')
if (elementById) hydrateRoot(elementById, <App />)
