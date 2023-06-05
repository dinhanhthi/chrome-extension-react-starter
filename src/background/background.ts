import browser from 'webextension-polyfill'

// Update the extension if a new version is available
browser.runtime.onUpdateAvailable.addListener(() => {
  browser.runtime.reload()
})

try {
  browser.runtime.onMessage.addListener(async message => {
    if (message.type === 'saveName') {
      await browser.storage.sync.set({ name: message.name })
      return true
    }
  })
} catch (e) {
  console.error(e)
}
