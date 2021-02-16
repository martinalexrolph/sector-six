import { Plugins } from '@capacitor/core';

// Cannot import ElectronStroe in a non-electron env, and can only import at the top level, so use require instead

let saveGame, loadGame, getAllGames

if (/electron/i.test(navigator.userAgent)) {

  const ElectronStore = require('electron-store')

  const electronStore = new ElectronStore()

  saveGame = async function(id, data) {
    data.updatedAt = (new Date()).toJSON()
    electronStore.set(`games.${id}`, data)
    return;
  }

  loadGame = async function(id) {
    console.log('in electron');
    const json = electronStore.get(`games.${id}`)
    return json ? json : null;
  }

  getAllGames = async function() {
    const games = electronStore.get('games')
    console.log(games)
    const result = [];
    Object.keys(games).forEach(k => {
      result.push({ ...games[k], id: k })
    })
    const sorted = result.sort((g1, g2) => (g1.updatedAt < g2.updatedAt) ? 1 : -1)
    return sorted
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

async function getIncompleteGames() {
  const allGames = await getAllGames()
  return allGames.filter(g => !g.completed)
}

async function getCompletedGames() {
  const allGames = await getAllGames()
  return allGames.filter(g => g.completed)
}

export { saveGame, loadGame, getAllGames, getIncompleteGames, getCompletedGames }