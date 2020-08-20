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
    var noteDouble = { id : 0 };
    noteDouble.getText = function() {
      return 'Favourite food: pesto';
    }
    var notelist = {};
    notelist.listNotes = function() {
      return [noteDouble];
    }
    var notelistview = new NoteListView(notelist);

    assert.isTrue(notelistview.noteListHTML() === 
    '<ul><li><div><a href="#notes/0">Favourite food: pest</a></div></li></ul>'
    );
  }
  
  function testNoteListViewNoteListHTMLReturnsNoteListWith2Notes() {
    var noteDouble = { id : 0 }, anotherNoteDouble = { id : 1 };
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

    assert.isTrue(notelistview.noteListHTML() === 
    '<ul><li><div><a href="#notes/0">Favourite food: pest</a></div></li>' + 
    '<li><div><a href="#notes/1">Favourite drink: sel</a></div></li></ul>'
    );
  }

  function testNoteListViewNoteListHTMLReturns20CharsMaxPerNote() {
    var noteDouble = { id : 0 };
    noteDouble.getText = function() {
      // string length is 21
      return 'Favourite food: pesto';
    }
    var notelist = {};
    notelist.listNotes = function() {
      return [noteDouble];
    }
    var notelistview = new NoteListView(notelist);
    // 72 because the tags at the start and end total 52 characters
    assert.isTrue(notelistview.noteListHTML().length === 72);
  }

  function testEachNoteIsLinkedToItsAppropriateURL() {
    var noteDouble = { id : 0 };
    noteDouble.getText = function() {
      return 'Favourite food: pesto';
    }
    var notelist = {};
    notelist.listNotes = function() {
      return [noteDouble];
    }
    var notelistview = new NoteListView(notelist);
    
    assert.isTrue(notelistview.noteListHTML() === 
    `<ul><li><div><a href="#notes/0">Favourite food: pest</a></div></li></ul>`
    );
  }

  testNoteListViewNoteListHTMLReturnsNoteListWith0Notes()
  testNoteListViewNoteListHTMLReturnsNoteListWith1Note();
  testNoteListViewNoteListHTMLReturnsNoteListWith2Notes()
  testNoteListViewNoteListHTMLReturns20CharsMaxPerNote();
  testEachNoteIsLinkedToItsAppropriateURL();
})(this);