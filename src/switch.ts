import { Child } from "compose-ui/es/child"
import { Context } from "compose-ui/es/context"
import { createNode } from "compose-ui/es/createNode"
import { EventEmitter } from "events"
import { reaction } from "mobx"

export interface SwitchProps<T> {
  expression: () => T
  when: (value: T) => Child
}

export function Switch<T>(props: SwitchProps<T>) {
  return function render(context: Context) {
    const {events: parentEvents, renderer, maybeNode} = context
    const events = new EventEmitter()

    const { expression, when } = props

    parentEvents.once("dispose", () => events.emit("dispose"))

    let node = createNode({
      child: when(expression()),
      context: {
        ...context,
        events,
      },
    })

    reaction(
      expression,
      (value) => {
        const container = node.parentElement!
        const child = when(value)

        const newNode = createNode({
          child,
          context: {
            ...context,
            events,
          },
        })

        events.emit("dispose")
        container.replaceChild(newNode, node)
        node = newNode
      },
      {
        fireImmediately: false,
      }
    )

    return node
  }
}
