import { Child } from "compose-ui/es/child"
import { Context } from "compose-ui/es/context"
import { render } from "compose-ui/es/render"
import { useReplaceOrCreateNode } from "compose-ui/es/useReplaceOrCreateNode"
import { reaction } from "mobx"
import { HTMLAttributes, IntrinsicElements } from "./htmlAttributes"
import { Prop, propReaction } from "./prop"

export type ElementKey = keyof IntrinsicElements

export type DomXHTMLAttributes<K extends ElementKey> = Omit<
  AttributeProp<IntrinsicElements[K]>,
  "children"
>

export type AttributeProp<T extends HTMLAttributes<any>> = {
  [P in keyof T]: Prop<T[P]>
}

export type DomXProps<K extends ElementKey> = DomXHTMLAttributes<K> & {
  tagName: K
  children?: Child[]
  innerHTML?: () => string
  ref?: (element: HTMLElementTagNameMap[K]) => unknown
}

export function domx<K extends ElementKey>(props: DomXProps<K>) {
  return function (context: Context) {
    const { tagName, children, innerHTML, ref, ...attributes } = props
    const { renderer, maybeNode } = context
    const { document } = renderer

    const element = useReplaceOrCreateNode({
      context,
      createNode: () => document.createElement(tagName),
      nodeTypeMatches: (node) =>
        node instanceof HTMLElement && node.tagName === tagName,
    })

    if (attributes != null) {
      for (let key of Object.keys(attributes as HTMLAttributes<unknown>)) {
        const maybeProp = attributes[key as keyof typeof attributes] as Prop<
          unknown
        >
        if (maybeProp != null) {
          const domKey = (key === "className" ? "class" : key).toLowerCase()
          propReaction(key, maybeProp, (value) => {
            // TODO calculations can be done once intead of inside the effect function
            if (typeof value === "string") {
              element.setAttribute(domKey, value)
            } else if (typeof value === "function") {
              const eventName = domKey.slice(2) as keyof HTMLElementEventMap
              element.addEventListener(
                eventName,
                (value as unknown) as (
                  this: HTMLDivElement,
                  ev: HTMLElementEventMap[typeof eventName]
                ) => any
              )
            }
          })
        }
      }
    }

    if (innerHTML != null) {
      reaction(
        innerHTML,
        (value) => {
          element.innerHTML = value
        },
        {
          fireImmediately: true,
        }
      )
    }

    if (children != null) {
      for (let i = 0; i < children.length; i++) {
        const child = children[i]
        const maybeChild = context.maybeNode?.childNodes[i]
        render({
          child,
          context: {
            ...context,
            maybeNode: maybeChild,
            parentNode: element,
          },
        })
      }
    }

    ref?.(element)

    return element
  }
}
