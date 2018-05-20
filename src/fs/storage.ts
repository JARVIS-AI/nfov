import * as settings from 'electron-settings'

const options = { prettify: true }

export function setBgColor(bgColor: string): void {
    settings.set('bgColor', bgColor, options)
}

export function getBgColor(): string {
    return settings.get('bgColor', '#000000', options) as string
}

export function setTextColor(textColor: string): void {
    settings.set('textColor', textColor, options)
}

export function getTextColor(): string {
    return settings.get('textColor', '#AAAAAA', options) as string
}

export function setLinkColor(linkColor: string): void {
    settings.set('linkColor', linkColor, options)
}

export function getLinkColor(): string {
    return settings.get('linkColor', '#00F900', options) as string
}

export function setSelectionColor(selectionColor: string): void {
    settings.set('selectionColor', selectionColor, options)
}

export function getSelectionColor(): string {
    return settings.get('selectionColor', '#00AAAA', options) as string
}

export function setFontName(fontName: string): void {
    settings.set('fontName', fontName, options)
}

export function getFontName(): string {
    return settings.get('fontName', 'BlockZone', options) as string
}

export function setFontSize(fontSize: string): void {
    settings.set('fontSize', fontSize, options)
}

export function getFontSize(): string {
    return settings.get('fontSize', '13', options) as string
}

export function setFontSmoothing(enabled: boolean): void {
    settings.set('font-smoothing', enabled, options)
}

export function getFontSmoothing(): boolean {
    return settings.get('font-smoothing', true, options) as boolean
}

export function setWindowCentering(enabled: boolean): void {
    settings.set('window-centering', enabled, options)
}

export function getWindowCentering(): boolean {
    return settings.get('window-centering', true, options) as boolean
}

export function setLinksHighlighting(enabled: boolean): void {
    settings.set('links-highlighting', enabled, options)
}

export function getLinksHighlighting(): boolean {
    return settings.get('links-highlighting', true, options) as boolean
}
