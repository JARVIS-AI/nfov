import { app, BrowserWindow, dialog } from 'electron'
import { basename } from 'path'
import { supportedFiles } from '../ui/settings/supported-files'

export function showOpenDialog(mainWindow: BrowserWindow): Promise<string> {
    return new Promise((resolve) => {
        dialog.showOpenDialog(
            mainWindow!,
            {
                filters: [{ name: '', extensions: removeDotFromExtensions(supportedFiles) }],
                properties: ['openFile']
            },
            (filePaths: string[]) => {
                if (!filePaths) return
                resolve(filePaths[0])
            }
        )
    })
}

export function showExportDialog(mainWindow: BrowserWindow,
                                 fileName: string): Promise<string> {
    return new Promise((resolve) => {
        dialog.showSaveDialog(
            mainWindow!,
            {
                defaultPath: `${app.getPath('downloads')}/${basename(fileName)}.png`
            },
            (selectedFileName: string) => {
                if (!selectedFileName) return
                resolve(selectedFileName)
            }
        )
    })
}

function removeDotFromExtensions(extt: string[]): string[] {
    const res: string[] = []
    extt.forEach((element) => {
        res.push(element.substring(1))
    })
    return res
}
