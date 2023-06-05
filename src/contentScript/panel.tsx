import cn from 'classnames'
import React from 'react'

type PanelProps = {
  name?: string
  className?: string
}

export default function Panel(props: PanelProps) {
  return (
    <div
      className={cn(
        props.className,
        'w-96 h-32 bg-sky-600 text-white flex items-center justify-center text-2xl font-semibold',
        'rounded-lg shadow-lg'
      )}
    >
      👋 Hello {props.name || 'anybody'}!
    </div>
  )
}
