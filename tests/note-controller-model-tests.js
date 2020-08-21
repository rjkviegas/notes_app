(function(exports) {
  function testNoteControllerIsAConstructor() {
    var noteListDouble; 
    var NoteListViewClass = function(notelist) {
      this.notelist = notelist;
    }
    var noteController = new NoteController(noteListDouble, NoteListViewClass);

    assert.isTrue(noteController instanceof NoteController);
  }

  function testInnerHTMLOfAppEqualsNoteText() {
    var noteListDouble;
    var NoteListViewClass = function() {}
    NoteListViewClass.prototype.noteListHTML = function() {
      return '<ul><li><div><a href="#notes/0">Favourite food: pest</a></div></li></ul>';
    }
    var noteController = new NoteController(noteListDouble, NoteListViewClass);
    noteController.changeApp();
    
    assert.isTrue(document.getElementById("app").innerHTML === 
    '<ul><li><div><a href="#notes/0">Favourite food: pest</a></div></li></ul>'
    );
  }

  function testLoadContentForASingleNote() {
    var noteDouble = {};
    noteDouble.getText = function() {
      return 'Favourite food: pesto';
    }
    var noteListDouble = {};
    noteListDouble.listNotes = function() {
      return [noteDouble];
    }
    var NoteListViewClass = function(notelist) {
      this.notelist = notelist;
    }
    NoteListViewClass.prototype.noteListHTML = function() {
      return '<ul><li><div><a href="#notes/0">Favourite food: pest</a></div></li></ul>';
    }
    var noteController = new NoteController(noteListDouble, NoteListViewClass, SingleNoteView);
    noteController.changeApp();
    noteController.hashChangedListener();

    window.location.hash = '#notes/0';
    const hashchange = new Event('hashchange')
    window.dispatchEvent(hashchange);

    assert.isTrue(document.getElementById("single-note-display").innerHTML === "<div>Favourite food: pesto</div>");
  }
  
  testNoteControllerIsAConstructor();
  testInnerHTMLOfAppEqualsNoteText();
  testLoadContentForASingleNote();
})(this);
