(function(exports) {
  var Note = function(text) {
    this._text = String(text)
  }

  Note.prototype.getText = function() {
    return this._text;
  }
  exports.Note = Note;
})(this);
