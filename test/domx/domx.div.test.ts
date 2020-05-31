import { createNode } from "compose-ui/es/createNode"
import { DOMRenderer } from "compose-ui/es/domRenderer"
import { EventEmitter } from "events"
import { domx } from "../../src/domx"
import { text } from "../../src/text"

const renderer = new DOMRenderer({
  window,
  isBrowser: false,
})

const context = {
  renderer,
  events: new EventEmitter(),
  parentNode: renderer.document.body,
}

test("updates div", () => {
  const node = createNode({
    child: domx({
      tagName: "div",
      children: ["static text"],
    }),
    context,
  })

  expect(node).toBeInstanceOf(renderer.window.HTMLDivElement)
  expect((node.childNodes[0] as Text).nodeValue).toEqual("static text")
})
