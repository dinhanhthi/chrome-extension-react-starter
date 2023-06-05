import React from 'react'

import { handleSaveName, openOptionsPage } from '../helpers/helpersBrowser'
import PopupWrapper from './popupWrapper'

export default function Popup() {
  return <PopupWrapper handleSaveName={handleSaveName} openOptionsPage={openOptionsPage} />
}
