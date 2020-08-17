(function(exports) {
  
  function testNoteListViewNoteListHTMLReturnsNoteListWith1Note() {
    var notelist = new NoteList(Note);
    notelist.createNote('Favourite food: pesto');
    var notelistview = new NoteListView(notelist);

    assert.isTrue(notelistview.noteListHTML() === '<ul><li><div>Favourite food: pesto</div></li></ul>');
  }
  
  testNoteListViewNoteListHTMLReturnsNoteListWith1Note();
})(this);