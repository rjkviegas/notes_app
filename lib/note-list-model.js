var NoteList = function(noteClass) {
  this._notes = [];
  this._noteClass = noteClass;
};
NoteList.prototype.createNote = function(text) {
  this._notes.push(new this._noteClass(text));
};
NoteList.prototype.listNotes = function() {
  return this._notes;
};