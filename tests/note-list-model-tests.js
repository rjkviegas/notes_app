(function(exports) {

  function testNoteListNotesIsAnArray() {
    var notelist = new NoteList();

    assert.isTrue(Array.isArray(notelist.notes));
  }

  function testStoresCreatedNotes() {
    var notelist = new NoteList(Note);
    notelist.createNote('argument');

    assert.isTrue(notelist.notes[0] instanceof Note);
    assert.isTrue(notelist.notes[0].text === 'argument');
  }

  function testListNotesReturnsNotesArray() {
    var notelist = new NoteList(Note);
    notelist.createNote('argument');

    assert.isTrue(Array.isArray(notelist.listNotes()));
  }

  testNoteListNotesIsAnArray();
  testStoresCreatedNotes();
  testListNotesReturnsNotesArray();
})(this);
