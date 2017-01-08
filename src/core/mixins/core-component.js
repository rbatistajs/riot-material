var coreComponent = {
  init(){
    var tagName = riot.util.tags.getTagName(this.root)
    this.root.classList.add(tagName)
  }
}

riot.mixin('coreComponent', coreComponent)
