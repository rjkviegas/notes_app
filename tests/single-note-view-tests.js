(function(exports) {
  
  function testSingleNoteViewIsAConstructor() {
    var singleNoteView = new SingleNoteView();

    assert.isTrue(singleNoteView instanceof SingleNoteView)
  }

  function testSingleNoteViewReturnHTML() {
    var noteDouble = {}
    noteDouble.getText = function() {
      return 'Favourite drink: seltzer';
    }
    var singleNoteView = new SingleNoteView(noteDouble);
    assert.isTrue(singleNoteView.returnHTML() === '<div>Favourite drink: seltzer</div>');
  }

  testSingleNoteViewIsAConstructor();
  testSingleNoteViewReturnHTML();
})(this);