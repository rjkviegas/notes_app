(function(exports) {
  var NoteController = function(notelist, noteListViewClass) {
    this.notelist = notelist;
    // this.notelist.createNote("Favourite food: pesto");
    this.noteListViewClass = noteListViewClass;
    this.notelistview = new this.noteListViewClass(this.notelist);
  }
  NoteController.prototype.changeApp = function() {
    var html = this.notelistview.noteListHTML();
    document.getElementById("app").innerHTML = html;
  }
  exports.NoteController = NoteController;
})(this);

