export async function handleSaveName(name: string) {
  await new Promise(resolve => setTimeout(resolve, 2000))
  console.log('handleSaveName in playground with name: ', name)
}

export function openOptionsPage() {
  console.log('openOptionsPage in playground')
}
