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
    var noteListDouble;
    var NoteListViewClass = function() {}
    NoteListViewClass.prototype.noteListHTML = function() {
      return '<ul><li><div><a href="#notes/0">Favourite food: pest</a></div></li></ul>';
    }
    var noteController = new NoteController(noteListDouble, NoteListViewClass);
    noteController.changeApp();
    document.getElementById('app').click();
    
    assert.isTrue(document.getElementById("app").innerHTML === "<div>Favourite food: pesto</div>");
  }
  
  testNoteControllerIsAConstructor();
  testInnerHTMLOfAppEqualsNoteText();
  testLoadContentForASingleNote();
})(this);
