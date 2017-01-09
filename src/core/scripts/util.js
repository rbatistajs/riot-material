const util = {}

util.hex2rgba = (hex,opacity) => {
  hex = hex.replace('#','')
  var r = parseInt(hex.substring(0,2), 16)
  var g = parseInt(hex.substring(2,4), 16)
  var b = parseInt(hex.substring(4,6), 16)

  return 'rgba('+r+','+g+','+b+','+(opacity/100)+')'
}

export default util
