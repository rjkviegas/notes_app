(function(exports) {
  var NoteListView = function(notelist) {
    this.notelist = notelist;
  }
  NoteListView.prototype.noteListHTML = function() {
    array = this.notelist.listNotes().map(note => note.getText());
    return '<ul><li><div>' + array.join('</div></li><li><div>') + '</div></li></ul>';
  }
  exports.NoteListView = NoteListView;
})(this);