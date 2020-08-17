(function(exports) {

  function testNoteListIsArray() {
    var notelist = new NoteList();
    assert.isTrue(Array.isArray(notelist.notes));
  }

  testNoteListIsArray();
})(this);
