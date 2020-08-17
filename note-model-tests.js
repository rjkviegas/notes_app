(function(exports) {
  function testNoteIsDefined() {
    if (Note === undefined) {
      throw new Error('Note is not defined');
    }
  }

  testNoteIsDefined();
  // function testNoteTextReturnsString() {
  //   var note = new Note();

  //   if (typeof(note.text) !== String) {
  //     throw new Error("Note text is not a String");
  //   }
  // }

  // testNoteTextReturnsString();
})(this);