var win = window
var requestAnimationFrame =
      win.requestAnimationFrame ||
      win.webkitRequestAnimationFrame ||
      win.mozRequestAnimationFrame ||
      win.oRequestAnimationFrame ||
      win.msRequestAnimationFrame ||
      function(callback){
        return setTimeout(function(){
          callback()
        }, 1000 / 60)
      }
var cancelAnimationFrame =
      win.cancelAnimationFrame ||
      win.webkitCancelAnimationFrame ||
      win.webkitCancelRequestAnimationFrame ||
      win.mozCancelAnimationFrame ||
      win.oCancelAnimationFrame ||
      win.msCancelAnimationFrame ||
      function(id){
        clearTimeout(id)
      }

function raf(){
  return requestAnimationFrame.apply(window, arguments)
}

function caf(){
  return cancelAnimationFrame.apply(window, arguments)
}

module.exports = {
  next : raf,
  requestAnimationFrame : raf,
  cancelAnimationFrame : caf
}
