# kTile

A spritesheet tile selector interface and library in Typescript

# Library Usage

1. Copy `kTile/kTile.ts` and the spritesheet to your project

2. Configure the variables at the top of `kTile.ts` to match your spritesheet and its location

3. Create a KTile object and trigger a callback once it is loaded:
    ```typescript
const kTile = new KTile(canvasContext);
kTile.loaded().then(() => {...})
```

4. Draw a tile:
    ```typescript
kTile.draw(id, x, y)
```

***But how do I find the tile id number?***

Load up `index.html` and click on the tile! You'll need to change the image URL in `index.html` if you've changed the spritesheet.

Sprite selector demo: <https://wattle-bird.github.io/kTile/>
