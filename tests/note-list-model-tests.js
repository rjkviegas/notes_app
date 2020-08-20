(function(exports) {

  function testStoresCreatedNotes() {
    var notelist = new NoteList(Note);

    assert.isTrue(notelist.listNotes().length === 0);

    notelist.createNote('argument');
    
    assert.isTrue(notelist.listNotes().length === 1);
    assert.isTrue(notelist.listNotes()[0] instanceof Note);
    assert.isTrue(notelist.listNotes()[0].getText() === 'argument');
  }

  function testListNotesReturnsNotesArray() {
    var notelist = new NoteList(Note);
    notelist.createNote('argument');

    assert.isTrue(Array.isArray(notelist.listNotes()));
  }

  function testCreatedNotesHaveAnIDProperty() {
    var notelist = new NoteList(Note);
    notelist.createNote('argument');

    assert.isTrue(notelist.listNotes()[0].id === 0);
  }

  testStoresCreatedNotes();
  testListNotesReturnsNotesArray();
  testCreatedNotesHaveAnIDProperty();
})(this);
