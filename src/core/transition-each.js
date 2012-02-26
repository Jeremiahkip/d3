function d3_transition_each(callback) {
  var id = d3_transitionId;
  d3_transitionId = this.id;
  d3_transitionEase = this.ease();

  for (var j = 0, m = this.length; j < m; j++) {
    for (var group = this[j], i = 0, n = group.length; i < n; i++) {
      var node = group[i];
      if (node) {
        d3_transitionDelay = this[j][i].delay;
        d3_transitionDuration = this[j][i].duration;
        callback.call(node = node.node, node.__data__, i, j);
      }
    }
  }

  d3_transitionId = id;
  d3_transitionDelay = d3_transitionDefaultDelay;
  d3_transitionDuration = d3_transitionDefaultDuration;
  d3_transitionEase = d3_transitionDefaultEase;
  return this;
}
