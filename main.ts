import {kTileAt} from "./kTile/kTile"

document.querySelector("#sprites").addEventListener("click", (ev: MouseEvent) => {
  document.querySelector("#id").innerHTML = "" + kTileAt(ev.offsetX, ev.offsetY)
})
