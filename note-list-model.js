var NoteList = function() {
  this.notes = []
};
NoteList.prototype.createNote = function() {
  return new Note();
};
