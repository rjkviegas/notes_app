var NoteList = function() {
  this.notes = []
};
NoteList.prototype.createNote = function(text) {
  this.notes.push(new Note(text));
};
