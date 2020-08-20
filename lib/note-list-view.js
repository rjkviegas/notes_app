(function(exports) {
  var NoteListView = function(notelist) {
    this.notelist = notelist;
  }
  NoteListView.prototype.noteListHTML = function() {
    array = this.notelist.listNotes().map(function(note) {
      return (note.getText().length > 20 ? note.getText().slice(0, 20) : note.getText());
    });
    return '<ul><li><div>' + array.join('</div></li><li><div>') + '</div></li></ul>';
  }
  exports.NoteListView = NoteListView;
})(this);