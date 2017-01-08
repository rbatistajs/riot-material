"use strict";
riot.tag2('md-button', '<yield></yield>', '', '', function(opts) {
    this.mixin('coreComponent')
});

'use strict';

var coreComponent = {
  init: function init() {
    var tagName = riot.util.tags.getTagName(this.root);
    this.root.classList.add(tagName);
  }
};

riot.mixin('coreComponent', coreComponent);