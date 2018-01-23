const body = document.getElementById('body')
const container = document.getElementById('app_container')
const styleSheet = document.styleSheets[0] as CSSStyleSheet
const selectionRuleIndex = 0
const fontSmoothingRuleIndex = 1

insertEmptyRules()

export function setTextColor(textColor: string): void {
    container!.style.color = textColor
}

export function setBgColor(backgroundColor: string): void {
    body!.style.backgroundColor = backgroundColor
    container!.style.backgroundColor = backgroundColor
}

export function setLinkColor(linkColor: string): void {
    const links = document.getElementsByTagName('a')
    for (const link of links) {
        link.style.color = linkColor
    }
}

export function setSelectionColor(selectionColor: string): void {
    styleSheet.removeRule(selectionRuleIndex)
    styleSheet.insertRule(`::selection { background: ${selectionColor}; }`, selectionRuleIndex)
}

export function setFont(fontName: string): void {
    container!.style.fontFamily = `"${fontName}"`
}

export function setFontSize(fontSize: string): void {
    container!.style.fontSize = `${fontSize}px`
}

export function enableFontSmoothing(enabled: boolean): void {
    styleSheet.removeRule(fontSmoothingRuleIndex)
    const rule = enabled ? '* { }' : '* { -webkit-font-smoothing: none; }'
    styleSheet.insertRule(rule, fontSmoothingRuleIndex)
}

function insertEmptyRules(): void {
    styleSheet.insertRule('::selection { }', selectionRuleIndex)
    styleSheet.insertRule('* { }', fontSmoothingRuleIndex)
}
