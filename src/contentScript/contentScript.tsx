import React from 'react'
import { createRoot } from 'react-dom/client'

import '../styles/content_script.scss'
import '../styles/global.scss'
import '../styles/tailwind.scss'
import PanelBrowser from './panelBrowser'

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    setTimeout(() => {
      insertPanel()
    }, 1500)
  }
}

function insertPanel() {
  if (isPanelAlreadyAdded()) return
  const body = document.querySelector('body')
  const panelContainer = document.createElement('div')
  panelContainer.classList.add('dinhanhthi')
  if (!panelContainer || !body) {
    throw new Error('Could not create the panel container')
  }
  body.appendChild(panelContainer)
  const root = createRoot(panelContainer)
  root.render(<PanelBrowser />)
}

function isPanelAlreadyAdded(): boolean {
  return !!document.querySelector('.dinhanhthi')
}
