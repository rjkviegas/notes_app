var NoteListView = function(notelist) {
  this.notelist = notelist;
}
NoteListView.prototype.noteListHTML = function() {
return '<ul>' + '<li><div>' + this.notelist.listNotes()[0].getText() + '</div></li>' + '</ul>'
}