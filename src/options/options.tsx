import React from 'react'

import { handleSaveName } from '../helpers/helpersBrowser'
import OptionsWrapper from './optionsWrapper'

export default function Options() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <OptionsWrapper handleSaveName={handleSaveName} />
    </div>
  )
}
