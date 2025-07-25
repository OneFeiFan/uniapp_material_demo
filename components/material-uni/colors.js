const theme_blue = {
    "--md-sys-color-primary": "rgb(65 95 145)",
    "--md-sys-color-surface-tint": "rgb(65 95 145)",
    "--md-sys-color-on-primary": "rgb(255 255 255)",
    "--md-sys-color-primary-container": "rgb(214 227 255)",
    "--md-sys-color-on-primary-container": "rgb(40 71 119)",
    "--md-sys-color-secondary": "rgb(86 95 113)",
    "--md-sys-color-on-secondary": "rgb(255 255 255)",
    "--md-sys-color-secondary-container": "rgb(218 226 249)",
    "--md-sys-color-on-secondary-container": "rgb(62 71 89)",
    "--md-sys-color-tertiary": "rgb(112 85 117)",
    "--md-sys-color-on-tertiary": "rgb(255 255 255)",
    "--md-sys-color-tertiary-container": "rgb(250 216 253)",
    "--md-sys-color-on-tertiary-container": "rgb(87 62 92)",
    "--md-sys-color-error": "rgb(186 26 26)",
    "--md-sys-color-on-error": "rgb(255 255 255)",
    "--md-sys-color-error-container": "rgb(255 218 214)",
    "--md-sys-color-on-error-container": "rgb(147 0 10)",
    "--md-sys-color-background": "rgb(249 249 255)",
    "--md-sys-color-on-background": "rgb(25 28 32)",
    "--md-sys-color-surface": "rgb(249 249 255)",
    "--md-sys-color-on-surface": "rgb(25 28 32)",
    "--md-sys-color-surface-variant": "rgb(224 226 236)",
    "--md-sys-color-on-surface-variant": "rgb(68 71 78)",
    "--md-sys-color-outline": "rgb(116 119 127)",
    "--md-sys-color-outline-variant": "rgb(196 198 208)",
    "--md-sys-color-shadow": "rgb(0 0 0)",
    "--md-sys-color-scrim": "rgb(0 0 0)",
    "--md-sys-color-inverse-surface": "rgb(46 48 54)",
    "--md-sys-color-inverse-on-surface": "rgb(240 240 247)",
    "--md-sys-color-inverse-primary": "rgb(170 199 255)",
    "--md-sys-color-primary-fixed": "rgb(214 227 255)",
    "--md-sys-color-on-primary-fixed": "rgb(0 27 62)",
    "--md-sys-color-primary-fixed-dim": "rgb(170 199 255)",
    "--md-sys-color-on-primary-fixed-variant": "rgb(40 71 119)",
    "--md-sys-color-secondary-fixed": "rgb(218 226 249)",
    "--md-sys-color-on-secondary-fixed": "rgb(19 28 43)",
    "--md-sys-color-secondary-fixed-dim": "rgb(190 198 220)",
    "--md-sys-color-on-secondary-fixed-variant": "rgb(62 71 89)",
    "--md-sys-color-tertiary-fixed": "rgb(250 216 253)",
    "--md-sys-color-on-tertiary-fixed": "rgb(40 19 46)",
    "--md-sys-color-tertiary-fixed-dim": "rgb(221 188 224)",
    "--md-sys-color-on-tertiary-fixed-variant": "rgb(87 62 92)",
    "--md-sys-color-surface-dim": "rgb(217 217 224)",
    "--md-sys-color-surface-bright": "rgb(249 249 255)",
    "--md-sys-color-surface-container-lowest": "rgb(255 255 255)",
    "--md-sys-color-surface-container-low": "rgb(243 243 250)",
    "--md-sys-color-surface-container": "rgb(237 237 244)",
    "--md-sys-color-surface-container-high": "rgb(231 232 238)",
    "--md-sys-color-surface-container-highest": "rgb(226 226 233)"
}

const theme_red = {

}

const color_themes = {
    "blue": theme_blue,
    "red": theme_red
}

let global_theme = theme_blue;

function setTheme(theme) {
    global_theme = color_themes[theme] || theme_blue;
}

function tabActiveColor(){
    return global_theme['--md-sys-color-on-surface'];
}
function tabInactiveColor(){
    return global_theme['--md-sys-color-surface-dim'];
}

export { setTheme, global_theme,tabActiveColor,tabInactiveColor };