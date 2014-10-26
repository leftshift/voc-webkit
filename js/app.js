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

//Highlight selected sidebar item
//Hacky
makeSidebarClickable()
function makeSidebarClickable(){
  $(".sidebar a").on("click", function(){
    console.log("clicked on " + $(this).data("path"))
    $(".sidebar li").removeClass("active")
    $(this).children("li").addClass("active")
  })
}
