(function(exports) {
  
  function testNoteTextReturnsAString() {
    var note = new Note(3);

    assert.isTrue(typeof(note.text) === 'string');
  }

  testNoteTextReturnsAString();
  // function testNoteTextReturnsString() {
  //   var note = new Note();

  //   if (typeof(note.text) !== String) {
  //     throw new Error("Note text is not a String");
  //   }
  // }

  // testNoteTextReturnsString();
})(this);