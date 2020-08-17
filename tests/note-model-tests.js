(function(exports) {
  
  function testNoteGetTextReturnsTextProperty() {
    var note = new Note(3);

    assert.isTrue(note.getText() === '3');
  }

  testNoteGetTextReturnsTextProperty();
})(this);