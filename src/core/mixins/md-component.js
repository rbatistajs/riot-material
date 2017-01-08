var mdComponent = {
  init(){
    var tagName = riot.util.tags.getTagName(this.root)
    this.root.classList.add(tagName)
    this.mixin('$mdTheme')
  }
}

riot.mixin('$mdComponent', mdComponent)
