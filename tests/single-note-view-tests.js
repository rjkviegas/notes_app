(function(exports) {
  
  function assertSingleNoteViewIsAConstructor() {
    var singleNoteView = new SingleNoteView();

    assert.isTrue(singleNoteView instanceof SingleNoteView)
  }

  assertSingleNoteViewIsAConstructor();

  function assertSingleNoteViewReturnHTML() {
    var noteDouble = {};
    noteDouble.getText = function() {
      return 'Favourite drink: seltzer';
    }
    var singleNoteView = new SingleNoteView(noteDouble);
    
    assert.isTrue(singleNoteView.returnHTML() === '<div>Favourite drink: seltzer</div>');
  }

  assertSingleNoteViewIsAConstructor();
  assertSingleNoteViewReturnHTML();
})(this);