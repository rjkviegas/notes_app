(function(exports) {
  
  function assertSingleNoteViewIsAConstructor() {
    var singleNoteView = new SingleNoteView();

    assert.isTrue(singleNoteView instanceof SingleNoteView)
  }

  assertSingleNoteViewIsAConstructor();
})(this);