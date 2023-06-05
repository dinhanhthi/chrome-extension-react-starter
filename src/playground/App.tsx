import cn from 'classnames'
import React from 'react'

import Panel from '../contentScript/panel'
import { handleSaveName, openOptionsPage } from '../helpers/helpersBrowser'
import NameInput from '../popup/nameInput'
import '../styles/global.scss'
import '../styles/options.scss'
import '../styles/popup.scss'
import '../styles/tailwind.scss'

export default function App() {
  const name = 'Playground'
  return (
    <div className={cn('flex h-screen w-screen flex-col items-center justify-center')}>
      <div className="flex flex-col items-start gap-16">
        <div className="flex flex-col gap-2">
          <div className="italic text-slate-800">{`<Panel> component`}</div>
          <Panel name={name} />
        </div>

        <div className="flex flex-col gap-2">
          <div className="italic text-slate-800">{`<NameInput> component`}</div>
          <NameInput handleSaveName={handleSaveName} openOptionsPage={openOptionsPage} />
        </div>
      </div>
    </div>
  )
}
