import { Plugins } from '@capacitor/core';
import { nanoid } from 'nanoid';

// Cannot import ElectronStroe in a non-electron env, and can only import at the top level, so use require instead

let saveGame, loadGame, getAllGames

if (/electron/i.test(navigator.userAgent)) {

  const ElectronStore = require('electron-store')

  const electronStore = new ElectronStore()

  saveGame = async function(id, data) {
    data.updatedAt = (new Date()).toJSON()
    electronStore.set(`games.${id}`, JSON.stringify(data))
    return;
  }

  loadGame = async function(id) {
    console.log('in electron');
    const json = electronStore.get(`games.${id}`)
    return json ? JSON.parse(json) : null;
  }

  getAllGames = async function() {
    const games = electronStore.get('games')
    console.log(games)
    return [
      {
        id: nanoid(),
        name: "Marty Skywalker II",
        createdAt: (new Date()).toJSON()
      }
    ]
  }

} else {
  const { Storage } = Plugins;

  saveGame = async function(id, data) {
    data.updatedAt = (new Date()).toJSON()
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

  getAllGames = async function() {
    const keys = await Storage.keys()
    const gameKeys = keys.keys.filter(k => k.startsWith('games.'))
    const games = [];
    for (let i = 0; i < gameKeys.length; i++) {
      const gameObject = await Storage.get({key: gameKeys[i]})
      const game = JSON.parse(gameObject.value)
      game.id = gameKeys[i].split('games.')[1]
      games.push(game)
    }
    const sorted = games.sort((g1, g2) => (g1.updatedAt > g2.updatedAt) ? 1 : -1)
    return sorted
  }

}

export { saveGame, loadGame, getAllGames }