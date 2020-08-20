(function(exports) {
  var NoteListView = function(notelist) {
    this.notelist = notelist;
  }
  NoteListView.prototype.noteListHTML = function() {
    array = this.notelist.listNotes().map(function(note) {
      if (note.getText().length > 20) {
        return `<a href="#notes/${note.id}">` + note.getText().slice(0, 20)
      } else {
        return `<a href="#notes/${note.id}>"` + note.getText();
      };
    });
    return '<ul><li><div>' + array.join('</a></div></li><li><div>') + '</a></div></li></ul>';
  }
  exports.NoteListView = NoteListView;
})(this);