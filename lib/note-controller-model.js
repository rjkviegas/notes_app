(function(exports) {
  var NoteController = function(notelist, noteListViewClass, singleNoteViewClass) {
    this.notelist = notelist;
    this.noteListViewClass = noteListViewClass;
    this.singleNoteViewClass = singleNoteViewClass;
    this.notelistview = new this.noteListViewClass(notelist);
  }
  NoteController.prototype.changeApp = function() {
    var html = this.notelistview.noteListHTML();
    document.getElementById("app").innerHTML = html;
  }

  NoteController.prototype.hashChangedListener = function() {
    window.addEventListener('hashchange', showSingleNoteViewForCurrentPage.bind(this));
  }
  var getNoteIdFromUrl = function() {
    return window.location.hash.split("#notes/")[1];
  }
  var showSingleNoteViewForCurrentPage = function() {
    var noteId = parseInt(getNoteIdFromUrl(), 10);
    var singleNoteView = new this.singleNoteViewClass(this.notelist.listNotes()[noteId]);
    document
      .getElementById("single-note-display")
      .innerHTML = singleNoteView.returnHTML();
  }
  exports.NoteController = NoteController;
  exports.showSingleNoteViewForCurrentPage = showSingleNoteViewForCurrentPage;
})(this);
