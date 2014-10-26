var fs = require('fs');

var voc_dir = "./voc/"

//Dev buttons and such
$("#reload").on("click", function(){
  console.log("Reloading")
  location.reload(true)
})
$("#dev-btn").on("click", function(){
  console.log("Opening dev tools")
  require('nw.gui').Window.get().showDevTools()
})

$("#dev-add-sidebar-item").on("click", function() {
  console.log("Adding item to sidebar")
  $(".sidebar ul").append('<a href="#" data-path="test/"><li>Lulz</li></a>')
  makeSidebarClickable()
  //Works, i guess? Otherwise, the newly added items don't
  //get the on click call
})

//get files in directory for the voc files (TODO: Where should the files go?)
fs.readdir(voc_dir, populateSidebar)

//Highlight selected sidebar item
//Hacky
makeSidebarClickable()

function makeSidebarClickable(){
  $(".sidebar ul a").on("click", function(){
    console.log("clicked on " + $(this).data("path"))
    $(".sidebar li").removeClass("active")
    $(this).children("li").addClass("active")
    populateContent($(this).data("path"))
  })
}

function populateSidebar(err, files) {
  console.log("Populating sidebar")
  console.log(err)
  console.log(files)
  if (files) {
    //clear current list
    $(".sidebar ul a").remove()

    for (var i=0; i < files.length; i++) {
      console.log("file " + files[i])
      $(".sidebar ul").append('<a href="#" data-path="' + voc_dir + files[i] +'"><li>'+ files[i] +'</li></a>')
    }

    makeSidebarClickable()
  } else {
    console.log("no files")

  }
}

function populateContent(file) {
  console.log("Populating content with " + file)
  fs.readFile(file, "utf8",populateEditTable)
}

function populateEditTable(err, data) {

  console.log(err)
  console.log(JSON.parse(data))
}
