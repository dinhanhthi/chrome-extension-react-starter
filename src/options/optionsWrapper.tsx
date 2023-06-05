import React from 'react'

import NameInput from '../popup/nameInput'

export type OptionsWrapperProps = {
  // eslint-disable-next-line no-unused-vars
  handleSaveName: (name: string) => Promise<void>
}

export default function PopupWrapper(props: OptionsWrapperProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-semibold">Options page</h1>
      <NameInput handleSaveName={props.handleSaveName} />
    </div>
  )
}
