var animationFrame = {}
  , win = window
  , requestAnimationFrame =
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
  , cancelAnimationFrame =
      win.cancelAnimationFrame ||
      win.webkitCancelAnimationFrame ||
      win.webkitCancelRequestAnimationFrame ||
      win.mozCancelAnimationFrame ||
      win.oCancelAnimationFrame ||
      win.msCancelAnimationFrame ||
      function(id){
        clearTimeout(id)
      }

module.exports = {
  requestAnimationFrame : function(){
    return requestAnimationFrame.apply(window, arguments)
  },
  cancelAnimationFrame : function(){
    return cancelAnimationFrame.apply(window, arguments)
  },
}
