
import { localStore } from '$lib/local-storage.svelte.js'
import * as Keys from '$lib/components/Key.svelte'
import * as Logs from '$lib/components/Log.svelte'

export const appState = () => new AppState()

export default class AppState {

  constructor() {
    this.keys = localStore('__keys', [])
  }

  addKey(key) {
    if(!Keys.isValid(this.keys, key)) return false
    this.keys.push(key)
    return true
  }

  removeKey(key) {
    const i = this.keys.findIndex(k => Keys.equals(k, key))
    this.keys.splice(i, 1)
  }

  getLogs(key) {
    return this.keys.find(k => Keys.equals(k, key))?.logs
  }

  static removeLog(logs, log) {
    const i = logs.findIndex(l => Logs.equals(l, log))
    logs.splice(i, 1)  
  }

  static addLog(key) {
    key.logs.unshift(Logs.empty())
  }
}
