(function(exports) {
  var NoteList = function(noteClass) {
    this._notes = [];
    this._noteClass = noteClass;
  };
  NoteList.prototype.createNote = function(text) {
    var createdNote = new this._noteClass(text)
    createdNote.id = this.listNotes().length;
    this._notes.push(createdNote);
  };
  NoteList.prototype.listNotes = function() {
    return this._notes;
  };
  exports.NoteList = NoteList;
})(this);