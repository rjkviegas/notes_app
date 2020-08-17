(function(exports) {

  function testNoteListIsArray() {
    var notelist = new NoteList();

    assert.isTrue(Array.isArray(notelist.notes));
  }
  function testNoteListCreatesSingleNote() {
    var notelist = new NoteList(Note);
    
    assert.isTrue(notelist.createNote() instanceof Note)
  }

  testNoteListIsArray();
  testNoteListCreatesSingleNote();
})(this);
