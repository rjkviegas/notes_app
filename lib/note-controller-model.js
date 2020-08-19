var NoteController = function(notelist) {
  this.notelist = notelist;
  this.notelist.createNote("Favourite food: pesto");
  this.notelistview = new NoteListView(notelist);
}
NoteController.prototype.changeApp = function() {
  var html = this.notelistview.noteListHTML();
  document.getElementById("app").innerHTML = html;
}
