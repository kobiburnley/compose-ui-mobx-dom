import { Context } from "compose-ui/es/context"
import { useReplaceOrCreateNode } from "compose-ui/es/useReplaceOrCreateNode"
import { reaction } from "mobx"

export function text(props: { data: () => string }) {
  return function text(context: Context) {
    const { renderer, maybeNode } = context
    const { document } = renderer

    const { data } = props

    const element = useReplaceOrCreateNode({
      context,
      createNode: () => document.createTextNode(data()),
      nodeTypeMatches: (node) => node instanceof renderer.window.Text,
      maybeNode,
    })

    reaction(
      data,
      (value) => {
        element.nodeValue = value
      },
      {
        fireImmediately: true,
      }
    )

    return element
  }
}
