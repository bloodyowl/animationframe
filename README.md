# animationframe

[![browser support](https://ci.testling.com/bloodyowl/animationframe.png)
](https://ci.testling.com/bloodyowl/animationframe)

## install

```sh
$ npm install bloody-animationframe
```

## require

```javascript
var animationFrame = require("bloody-animationframe")
```

## api

### `animationFrame.requestAnimationFrame(fn) > id`

executes `fn` on the next frame.

returns `id` identifier

### `animationFrame.cancelAnimationFrame(id)`

cancels the `requestAnimationFrame` that returned the given `id`. 
