import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import '../styles/global.scss'
import '../styles/options.scss'
import '../styles/tailwind.scss'
import Options from './options'

function init() {
  const appContainer = document.createElement('div')
  appContainer.classList.add('dinhanhthi')
  document.body.appendChild(appContainer)
  if (!appContainer) {
    throw new Error('Can not find AppContainer')
  }
  const root = createRoot(appContainer)
  root.render(
    <BrowserRouter>
      <Options />
    </BrowserRouter>
  )
}

init()
