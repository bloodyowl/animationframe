var tape = require("tape")
  , animationFrame = require("../")

tape("animationFrame", function(test){

  test.plan(3)

  var ref = 0
    , id

  id = animationFrame.requestAnimationFrame(function(){
    test.equal(ref, 1, "is asynchrounous (1)")
    animationFrame.requestAnimationFrame(function(){
      test.equal(ref, 2, "is asynchrounous (2)")
    })
    ref += 1
  })

  test.equal(typeof id, "number", "returns id")

  ref += 1

})

tape("animationFrame", function(test){

  test.plan(1)

  var id = animationFrame.requestAnimationFrame(function(){
    test.fail("should not be executed")
    animationFrame.requestAnimationFrame(function(){
      test.fail("should not be executed")
    })
  })

  test.equal(typeof id, "number", "returns id")
  animationFrame.cancelAnimationFrame(id)

})
