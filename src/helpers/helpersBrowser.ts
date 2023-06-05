// helpers used only for the browser
import browser from 'webextension-polyfill'

export async function getName(): Promise<string> {
  const { name } = await browser.storage.sync.get(['name'])
  return name
}

export async function handleSaveName(name: string) {
  const response = await browser.runtime.sendMessage({
    type: 'saveName',
    name
  })
  if (!response) return
}

export function openOptionsPage() {
  browser.runtime.openOptionsPage()
}
