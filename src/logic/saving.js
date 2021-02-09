import { Plugins } from '@capacitor/core';

// Cannot import ElectronStroe in a non-electron env, and can only import at the top level, so use require instead
let ElectronStore

let saveGame, loadGame

if (/electron/i.test(navigator.userAgent)) {

  ElectronStore = require('electron-store')

  const electronStore = ElectronStore()

  saveGame = async function(id, data) {
    electronStore.set(`games.${id}`, JSON.stringify(data))
    return;
  }

  loadGame = async function(id) {
    console.log('in electron');
    const json = electronStore.get(`games.${id}`)
    return json ? JSON.parse(json) : null;
  }

} else {
  
  const { Storage } = Plugins;

  saveGame = async function(id, data) {
    await Storage.set({ key: `games.${id}`, value: JSON.stringify(data) })
    console.log('not in electron')
    return;
  }

  loadGame = async function(id) {
    const container = await Storage.get({ key: `games.${id}` })
    const json = container.value
    console.log('not in electron')
  
    if (json) {
      return JSON.parse(json)
    } else {
      return null
    }
  }

}

export { saveGame, loadGame }