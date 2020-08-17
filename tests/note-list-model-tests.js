(function(exports) {

  function testNoteListIsArray() {
    var notelist = new NoteList();

    assert.isTrue(Array.isArray(notelist.notes));
  }

  function testStoresCreatedNotes() {
    var notelist = new NoteList(Note);
    notelist.createNote('argument');

    assert.isTrue(notelist.notes[0] instanceof Note);
    assert.isTrue(notelist.notes[0].text === 'argument');
  }

  testNoteListIsArray();
  testStoresCreatedNotes();
})(this);
