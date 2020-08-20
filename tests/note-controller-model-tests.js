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
    var noteList = new NoteList(NoteDouble)
    noteList.listNotes = function() {
      return [(new NoteDouble('Favourite food: pesto'))];
    }
    // noteList.createNote = function(text) {
    //   return new NoteDouble("hello world")
    // }
    var NoteListViewClass = function(notelist) {
      this.notelist = notelist;
    }
    NoteListViewClass.prototype.noteListHTML = function() {
      return '<ul><li><div>Favourite food: pesto</div></li></ul>';
    }
    var noteController = new NoteController(noteList, NoteListViewClass);
    noteController.changeApp();
    
    assert.isTrue(document.getElementById("app").innerHTML === '<ul><li><div>Favourite food: pesto</div></li></ul>')
  }
  
  assertInnerHTMLOfAppEqualsNoteText();
  assertNoteControllerIsAConstructor();
})(this);
