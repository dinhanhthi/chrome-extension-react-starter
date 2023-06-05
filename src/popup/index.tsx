import React from 'react'
import { createRoot } from 'react-dom/client'

import '../styles/global.scss'
import '../styles/tailwind.scss'
import Popup from './popup'

function init() {
  const appContainer = document.createElement('div')
  appContainer.classList.add('dinhanhthi')
  document.body.appendChild(appContainer)
  if (!appContainer) {
    throw new Error('Can not find AppContainer')
  }
  const root = createRoot(appContainer)
  root.render(<Popup />)
}

init()
