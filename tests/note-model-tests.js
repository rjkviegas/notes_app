(function(exports) {
  
  function testNoteTextReturnsAString() {
    var note = new Note(3);

    assert.isTrue(typeof(note.text) === 'string');
  }
  function testNoteGetTextReturnsTextProperty() {
    var note = new Note(3);

    assert.isTrue(note.getText() === '3');
  }

  testNoteTextReturnsAString();
  testNoteGetTextReturnsTextProperty();
})(this);