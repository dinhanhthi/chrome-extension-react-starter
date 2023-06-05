import React from 'react'

import NameInput from './nameInput'

export type PopupOptionsWrapperProps = {
  // eslint-disable-next-line no-unused-vars
  handleSaveName: (name: string) => Promise<void>
  openOptionsPage: () => void
}

export default function PopupWrapper(props: PopupOptionsWrapperProps) {
  return <NameInput handleSaveName={props.handleSaveName} openOptionsPage={props.openOptionsPage} />
}
