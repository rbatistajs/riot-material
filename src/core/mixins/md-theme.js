var mdTheme = {
  init(){
    if(this.opts.mdTheme){
      this.root.classList.add(`md-${this.opts.mdTheme}-theme`);
    }
  }
}

riot.mixin('$mdTheme', mdTheme)
