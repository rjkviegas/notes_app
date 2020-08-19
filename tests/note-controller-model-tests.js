(function(exports) {
  function assertNoteControllerIsAConstructor() {
    var noteController = new NoteController();

    assert.isTrue(noteController instanceof NoteController);
  }
  
  assertNoteControllerIsAConstructor();
})(this);
