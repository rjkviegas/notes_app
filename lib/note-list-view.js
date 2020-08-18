(function(exports) {
  var NoteListView = function(notelist) {
    this.notelist = notelist;
  }
  NoteListView.prototype.noteListHTML = function() {
    var html = ['<ul>'];
    this.notelist.listNotes().forEach(function(note) {
      html.push('<li><div>' + note.getText() + '</div></li>');
    })
    html.push('</ul>');
    return html.join('');
  }
  exports.NoteListView = NoteListView;
})(this);