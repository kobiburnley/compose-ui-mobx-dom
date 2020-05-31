import { createNode } from "compose-ui/es/createNode"
import { DOMRenderer } from "compose-ui/es/domRenderer"
import { EventEmitter } from "events"
import { text } from "../src/text"

const renderer = new DOMRenderer({
  window,
  isBrowser: false,
})

const context = {
  renderer,
  events: new EventEmitter(),
  parentNode: renderer.document.body,
}
test("updates text", () => {
  const node = createNode({
    child: text({
      data: () => "hello",
    }),
    context,
  })

  expect((node as Text).nodeValue).toEqual("hello")
})

test("uses existing text node", () => {
  const maybeNode = document.createTextNode("")
  const node = createNode({
    child: text({
      data: () => "hello2",
    }),
    context: {
      ...context,
      maybeNode,
    },
  })

  expect(node).toEqual(maybeNode)
  expect((node as Text).nodeValue).toEqual("hello2")
})

test("replaces existing non-text node", () => {
  const maybeNode = context.renderer.document.createElement("div")

  context.renderer.document.body.append(maybeNode)
  expect(renderer.document.body.childNodes[0]).toBeInstanceOf(renderer.window.HTMLDivElement)

  const node = createNode({
    child: text({
      data: () => "hello2",
    }),
    context: {
      ...context,
      maybeNode,
    },
  })

  expect((node as Text).nodeValue).toEqual("hello2")
  expect(renderer.document.body.childNodes[0]).toBeInstanceOf(renderer.window.Node)
})
