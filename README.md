# animationframe

[![browser support](https://ci.testling.com/bloodyowl/animationframe.png)
](https://ci.testling.com/bloodyowl/animationframe)

## install

```sh
$ npm install bloody-animationframe
```

## require

```javascript
var af = require("bloody-animationframe")
```

## api

### af.requestAnimationFrame(fn) > id

executes `fn` on the next frame.

returns `id` identifier

### af.next(fn) > id

alias for `af.requestAnimationFrame`


### af.cancelAnimationFrame(id)

cancels the `requestAnimationFrame` that returned the given `id`.
