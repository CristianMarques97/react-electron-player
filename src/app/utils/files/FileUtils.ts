class FileUtils {
  saveFileInLocalStorage(filePath: string, fileName: string, data: any) {
    const w: any = window
    w.api.send('save-file', { filePath, fileName, data })
  }
}

export default new FileUtils()
