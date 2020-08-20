(function(exports) {
  var NoteController = function(notelist, noteListViewClass) {
    this.noteListViewClass = noteListViewClass;
    this.notelistview = new this.noteListViewClass(notelist);
  }
  NoteController.prototype.changeApp = function() {
    var html = this.notelistview.noteListHTML();
    document.getElementById("app").innerHTML = html;
  }
  exports.NoteController = NoteController;
})(this);

