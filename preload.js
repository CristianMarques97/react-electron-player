const { contextBridge, ipcRenderer } = require('electron')
const backend = require('i18next-electron-fs-backend')

const ipcChannels = ['minimize', 'maximize', 'close', 'save-file', 'localize']

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('api', {
  send: (channel, data) => {
    if (ipcChannels.includes(channel)) {
      ipcRenderer.send(channel, data)
    }
  },
  receive: (channel, func) => {
    if (ipcChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender`
      ipcRenderer.on(channel, (event, ...args) => func(...args))
    }
  },
  i18nextElectronBackend: backend.preloadBindings(ipcRenderer),
})
