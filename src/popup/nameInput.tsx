import cn from 'classnames'
import React from 'react'
import { LoadingIcon } from '../icons/loadingIcon'

type NameInputProps = {
  // eslint-disable-next-line no-unused-vars
  handleSaveName: (name: string) => Promise<void>
  openOptionsPage?: () => void
}

export default function NameInput(props: NameInputProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [isSaving, setIsSaving] = React.useState(false)

  async function onSaveName() {
    const name = inputRef.current?.value
    if (name) {
      setIsSaving(true)
      await props.handleSaveName(name)

      // We need this because the browser.storage.sync.set() is too fast
      setTimeout(() => {
        setIsSaving(false)
        inputRef.current!.value = ''
      }, 1000)
    }
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex gap-3 h-fit w-fit">
        <input
          ref={inputRef}
          className={cn(
            'border-1 text-base w-full appearance-none rounded-md',
            'border border-slate-400 bg-white py-2 px-4 text-center',
            'leading-tight text-gray-600 focus:border-sky-400 focus:bg-white',
            'focus:text-gray-800 focus:outline-none w-60'
          )}
          type="text"
          placeholder="Type your name"
        />
        <button
          className={cn(
            'flex w-24 items-center justify-center rounded-lg bg-sky-600 px-8 text-base text-white hover:bg-sky-700'
          )}
          onClick={onSaveName}
        >
          {!isSaving && <div>Save</div>}
          {isSaving && (
            <div className="flex">
              <LoadingIcon className={cn('animate-spin text-[1.5em] font-semibold')} />
            </div>
          )}
        </button>
      </div>
      {props.openOptionsPage && (
        <a
          className="italic cursor-pointer text-slate-400 hover:text-slate-800"
          onClick={props.openOptionsPage}
        >
          Open Options page
        </a>
      )}
    </div>
  )
}
