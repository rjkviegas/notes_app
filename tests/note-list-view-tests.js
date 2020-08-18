(function(exports) {
  
  function testNoteListViewNoteListHTMLReturnsNoteListWith0Notes() {
    var notelist = new NoteList(Note);
    var notelistview = new NoteListView(notelist);

    assert.isTrue(notelistview.noteListHTML() === '<ul><li><div></div></li></ul>');
  }
  function testNoteListViewNoteListHTMLReturnsNoteListWith1Note() {
    var notelist = new NoteList(Note);
    notelist.createNote('Favourite food: pesto');
    var notelistview = new NoteListView(notelist);

    assert.isTrue(notelistview.noteListHTML() === '<ul><li><div>Favourite food: pesto</div></li></ul>');
  }
  
  function testNoteListViewNoteListHTMLReturnsNoteListWith2Notes() {
    var notelist = new NoteList(Note);
    notelist.createNote('Favourite food: pesto');
    notelist.createNote('Favourite drink: seltzer');
    var notelistview = new NoteListView(notelist);

    assert.isTrue(notelistview.noteListHTML() === '<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>');
  }

  testNoteListViewNoteListHTMLReturnsNoteListWith0Notes()
  testNoteListViewNoteListHTMLReturnsNoteListWith1Note();
  testNoteListViewNoteListHTMLReturnsNoteListWith2Notes()
})(this);