import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import UseState from './useState.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UseState />
  </StrictMode>,
)
