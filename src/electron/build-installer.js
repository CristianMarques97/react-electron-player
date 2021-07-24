const electronInstaller = require('electron-winstaller')

// In this case, we can use relative paths
const settings = {
  // Specify the folder where the built app is located

  appDirectory: `${__dirname}../../../out/Electron Music Player-win32-x64`,
  // Specify the existing folder where
  outputDirectory: './windowsInstaller',
  // The name of the Author of the app (the name of your company)
  authors: 'Our Code World Inc.',
  // The name of the executable of your built
  exe: './Electron Music Player.exe',
}

const resultPromise = electronInstaller.createWindowsInstaller(settings)

resultPromise.then(() => {
  console.log('The installers of your application were succesfully created !')
}, (e) => {
  console.log(`Installer build failed: ${e.message}`)
})
