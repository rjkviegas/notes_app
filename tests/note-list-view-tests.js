(function(exports) {
  
  function testNoteListViewNoteListHTMLReturnsNoteListWith0Notes() {
    var notelist = {};
    notelist.listNotes = function() {
      return [];
    }
    var notelistview = new NoteListView(notelist);

    assert.isTrue(notelistview.noteListHTML() === '<ul><li><div></div></li></ul>');
  }
  function testNoteListViewNoteListHTMLReturnsNoteListWith1Note() {
    var noteDouble = {};
    noteDouble.getText = function() {
      return 'Favourite food: pesto';
    }
    var notelist = {};
    notelist.listNotes = function() {
      return [noteDouble];
    }
    var notelistview = new NoteListView(notelist);

    assert.isTrue(notelistview.noteListHTML() === '<ul><li><div>Favourite food: pest</div></li></ul>');
  }
  
  function testNoteListViewNoteListHTMLReturnsNoteListWith2Notes() {
    var noteDouble = {}, anotherNoteDouble = {};
    noteDouble.getText = function() {
      return 'Favourite food: pesto';
    }
    anotherNoteDouble.getText = function() {
      return 'Favourite drink: seltzer';
    }
    var notelist = {};
    notelist.listNotes = function() {
      return [noteDouble, anotherNoteDouble];
    }
    var notelistview = new NoteListView(notelist);

    assert.isTrue(notelistview.noteListHTML() === '<ul><li><div>Favourite food: pest</div></li><li><div>Favourite drink: sel</div></li></ul>');
  }

  function testNoteListViewNoteListHTMLReturns20CharsMaxPerNote() {
    var noteDouble = {};
    noteDouble.getText = function() {
      return 'Favourite food: pesto';
    }
    var notelist = {};
    notelist.listNotes = function() {
      return [noteDouble];
    }
    var notelistview = new NoteListView(notelist);
    // 49 because the tags at the start and end total 29 characters
    assert.isTrue(notelistview.noteListHTML().length == 49);
  }

  testNoteListViewNoteListHTMLReturnsNoteListWith0Notes()
  testNoteListViewNoteListHTMLReturnsNoteListWith1Note();
  testNoteListViewNoteListHTMLReturnsNoteListWith2Notes()
  testNoteListViewNoteListHTMLReturns20CharsMaxPerNote();
})(this);