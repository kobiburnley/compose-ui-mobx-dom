import { reaction, IReactionOptions } from "mobx"

export type EventProp<T> = T extends (...args: any[]) => void ? T : never
export type ReactiveProp<T> = () => T
export type Prop<T> = ReactiveProp<T> | EventProp<T>

function isEventProps<T>(key: string, prop: Prop<T>): prop is EventProp<T> {
  return key[0] === "o" && key[1] === "n"
}

export function propReaction<T>(
  key: string,
  prop: Prop<T>,
  effect: (value: T) => unknown,
  opts?: IReactionOptions
) {
  if (isEventProps(key, prop)) {
    effect(prop as T)
  } else {
    reaction(prop as ReactiveProp<T>, effect, {
      fireImmediately: true,
      ...opts,
    })
  }
}
