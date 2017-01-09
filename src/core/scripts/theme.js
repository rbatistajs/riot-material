import palette from './palette'
import util from './util'

const THEME_CSS = `${process.env.THEME_CSS}`,
      __THEMES = {}

const themeTemplate = (styles, theme) => {
  return styles
    .replace(/THEME_NAME/g, theme.name)
    .replace(/'{([ -\w]*)}'/gi, function(match, expr){
      var $expr = expr.split('-')
      var colorType, color, opacity, contrast = false;

      if($expr[0] == "contrast"){
        $expr.splice(0, 1)
        contrast = true
      }


      colorType = $expr[0];
      color = $expr[1];
      opacity = $expr[2];

      switch (colorType) {
        case 'primary':
          var primary = theme._primary,
              darkColors = primary.contrastDarkColors,
              lightColors = primary.contrastLightColors,
              strongLightColors = primary.contrastStrongLightColors

          darkColors = darkColors ? darkColors.split(' ') : []
          lightColors = lightColors ? lightColors.split(' ') : []
          strongLightColors = strongLightColors ? strongLightColors.split(' ') : []

          color = (color == 'color' ? '500' : color)

          if(contrast){
            if(~darkColors.indexOf(color) || primary.contrastDefaultColor == 'dark'){
              color = "rgba(0,0,0, 0.87)";
            }else if(~lightColors.indexOf(color) || primary.contrastDefaultColor == 'light'){
              color = "rgba(255,255,255, 0.87)";
            }else{
              color = "rgba(0,0,0, 0.87)";
            }
          }else{
            color = primary[color]
            if(opacity){
              color = util.hex2rgba(color, opacity)
            }
          }

          return color

          break;
        case 'accent':

            color = theme._accent[color]
            if(opacity){
              color = util.hex2rgba(color, opacity)
            }
            return color

          break;
        case 'warn':

            color = theme._warn[color]
            if(opacity){
              color = util.hex2rgba(color, opacity)
            }
            return color

          break;
        default:
          return '#c3c3c3'
      }

    })
}

class Theme {

  constructor(name){
    __THEMES[name] = this
    this.name = name

    this.primaryPalette('blue')
    this.accentPalette('pink')
    this.warnPalette('red')
    this.backgroundPalette('grey')
  }

  primaryPalette(paletteName){
    var colors = paletteName instanceof Object
                    ? paletteName : palette[paletteName]
    this._primary = Object.assign({}, colors)
    return this
  }

  accentPalette(paletteName){
    var colors = paletteName instanceof Object
                    ? paletteName : palette[paletteName]

    this._accent = Object.assign({}, colors)
    return this
  }

  warnPalette(paletteName){
    var colors = paletteName instanceof Object
                    ? paletteName : palette[paletteName]

    this._warn = Object.assign({}, colors)
    return this
  }

  backgroundPalette(paletteName){
    var colors = paletteName instanceof Object
                    ? paletteName : palette[paletteName]

    this._background = Object.assign({}, colors)
    return this
  }

  mount(){
    var style = document.createElement('style')
    style.setAttribute("theme", this.name)
    style.type = 'text/css'
    style.innerHTML = themeTemplate(THEME_CSS, this)
    document.head.appendChild(style)
    return this
  }

  unmount(){
    var style = document.querySelector('style[theme='+this.name+']')
    style.parentNode.removeChild(style);
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
