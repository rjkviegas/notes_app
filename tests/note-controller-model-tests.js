(function(exports) {
  function assertNoteControllerIsAConstructor() {
    var noteController = new NoteController();

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
    noteList.createNote = function(text) {
      return new NoteDouble(text)
    }
    var noteController = new NoteController(noteList);
    noteController.changeApp();
    
    assert.isTrue(document.getElementById("app").innerHTML === '<ul><li><div>Favourite food: pesto</div></li></ul>')
  }
  
  assertInnerHTMLOfAppEqualsNoteText();
  assertNoteControllerIsAConstructor();
})(this);
