(function(exports) {
  function assertNoteControllerIsAConstructor() {
    var noteListDouble; 
    var NoteListViewClass = function(notelist) {
      this.notelist = notelist;
    }
    var noteController = new NoteController(noteListDouble, NoteListViewClass);

    assert.isTrue(noteController instanceof NoteController);
  }

  function assertInnerHTMLOfAppEqualsNoteText() {
    var NoteDouble = function(text) {
      this.text = text;
    }
    NoteDouble.prototype.getText = function() {
      return this.text
    }
    var NoteListDouble = function(noteClass) {
      this.noteClass = noteClass;
    }
    var noteListDouble = new NoteListDouble(NoteDouble)
    noteListDouble.listNotes = function() {
      return [(new NoteDouble('Favourite food: pesto'))];
    }
    var NoteListViewClass = function(notelist) {
      this.notelist = notelist;
    }
    NoteListViewClass.prototype.noteListHTML = function() {
      return '<ul><li><div>Favourite food: pesto</div></li></ul>';
    }
    var noteController = new NoteController(noteListDouble, NoteListViewClass);
    noteController.changeApp();
    
    assert.isTrue(document.getElementById("app").innerHTML === '<ul><li><div>Favourite food: pesto</div></li></ul>')
  }
  
  assertNoteControllerIsAConstructor();
  assertInnerHTMLOfAppEqualsNoteText();
})(this);
