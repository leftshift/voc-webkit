$("#reload").on("click", function(){
  console.log("Reloading")
  location.reload(true)
})
$("#dev-btn").on("click", function(){
  console.log("Opening dev tools")
  require('nw.gui').Window.get().showDevTools()
})
