var NoteList = function() {
  this.notes = []
};
NoteList.prototype.createNote = function(text) {
  return new Note(text);
};
