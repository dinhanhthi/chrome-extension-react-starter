import React, { useEffect } from 'react'

import { getName } from '../helpers/helpersBrowser'
import Panel from './panel'

export default function PanelBrowser() {
  const [name, setName] = React.useState<string>()
  useEffect(() => {
    ;(async () => {
      const name = await getName()
      /* ###Thi */ console.log('name: ', name)
      setName(name)
    })()
  }, [])

  return <Panel className="fixed bottom-8 right-8" name={name} />
}
