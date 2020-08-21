(function(exports) {
  var NoteController = function(notelist, noteListViewClass) {
    this.noteListViewClass = noteListViewClass;
    this.notelistview = new this.noteListViewClass(notelist);
  }
  NoteController.prototype.changeApp = function() {
    var html = this.notelistview.noteListHTML();
    document.getElementById("app").innerHTML = html;
  }

  NoteController.prototype.hashChangedListener = function() {
    window.addEventListener('hashchange', showSingleNote);
  }
  var showSingleNote = function() {
    document
      .getElementById("single-note-display")
      .innerHTML = "<div>Favourite food: pesto</div>";
  }
  exports.NoteController = NoteController;
  exports.showSingleNote = showSingleNote;
})(this);

