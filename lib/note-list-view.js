(function(exports) {
  var NoteListView = function(notelist) {
    this.notelist = notelist;
  }
  NoteListView.prototype.noteListHTML = function() {
    array = this.notelist.listNotes().map(function(note) {
        return `<a href="#notes/${note.id}">` + note.getText().slice(0, 20) + '</a>';
    });
    return '<ul><li><div>' + array.join('</div></li><li><div>') + '</div></li></ul>';
  }
  exports.NoteListView = NoteListView;
})(this);