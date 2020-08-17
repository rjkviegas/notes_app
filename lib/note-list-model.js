var NoteList = function(noteClass) {
  this.notes = [];
  this.noteClass = noteClass;
};
NoteList.prototype.createNote = function(text) {
  this.notes.push(new this.noteClass(text));
};
