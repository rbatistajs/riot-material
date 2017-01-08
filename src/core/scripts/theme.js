import palette from './palette'

const THEME_STYLES = `${process.env.THEME_STYLES}`,
      __THEMES = {}

const themeTemplate = (styles, theme) => {
  return styles
    .replace(/THEME_NAME/g, theme.name)
    .replace(/'{primary-color}'/gi,
      theme._primary.default || theme._primary['500']
    )
}

class Theme {

  constructor(name){
    __THEMES[name] = this
    this.name = name

    this.primaryPalette('blue')
    this.accentPalette('blue')
    this.warnPalette('blue')
  }

  primaryPalette(paletteName){
    this._primary = palette[paletteName]
    return this
  }

  accentPalette(paletteName){
    this._accent = palette[paletteName]
    return this
  }

  warnPalette(paletteName){
    this._warn = palette[paletteName]
    return this
  }

  mount(){
    var style = document.createElement('style')
    style.type = 'text/css'
    style.innerHTML = themeTemplate(THEME_STYLES, this)
    style.setAttribute("theme", this.name)
    document.head.appendChild(style)
    return this
  }
}

function theme(name){
  return new Theme(name)
}

theme.default = ''
theme.setDefault = (themeName) => {
  document.documentElement.classList.remove('md-'+theme.default+'-theme')
  document.documentElement.classList.add('md-'+themeName+'-theme')
  theme.default = themeName
}

theme('default')
.primaryPalette('blue')
.mount()

theme.setDefault('default')

export default theme
