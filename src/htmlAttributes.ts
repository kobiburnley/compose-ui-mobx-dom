import type { AriaAttributes, CSSProperties } from "react"

type Booleanish = boolean | "true" | "false"

type EventHandler<E extends Event = Event, T = Element> = (event: E & {target: T}) => void
type ReactEventHandler<T = Element> = EventHandler<Event, T>

type ClipboardEventHandler<T = Element> = EventHandler<ClipboardEvent, T>
type CompositionEventHandler<T = Element> = EventHandler<CompositionEvent, T>
type DragEventHandler<T = Element> = EventHandler<DragEvent, T>
type FocusEventHandler<T = Element> = EventHandler<FocusEvent, T>
type FormEventHandler<T = Element> = EventHandler<Event, T>
type ChangeEventHandler<T = Element> = EventHandler<Event, T>
type KeyboardEventHandler<T = Element> = EventHandler<KeyboardEvent, T>
type MouseEventHandler<T = Element> = EventHandler<MouseEvent, T>
type TouchEventHandler<T = Element> = EventHandler<TouchEvent, T>
type PointerEventHandler<T = Element> = EventHandler<PointerEvent, T>
type UIEventHandler<T = Element> = EventHandler<UIEvent, T>
type WheelEventHandler<T = Element> = EventHandler<WheelEvent, T>
type AnimationEventHandler<T = Element> = EventHandler<AnimationEvent, T>
type TransitionEventHandler<T = Element> = EventHandler<TransitionEvent, T>

export interface DOMAttributes<T> {
  dangerouslySetInnerHTML?: {
    __html: string
  }

  // Clipboard Events
  onCopy?: ClipboardEventHandler<T>
  onCopyCapture?: ClipboardEventHandler<T>
  onCut?: ClipboardEventHandler<T>
  onCutCapture?: ClipboardEventHandler<T>
  onPaste?: ClipboardEventHandler<T>
  onPasteCapture?: ClipboardEventHandler<T>

  // Composition Events
  onCompositionEnd?: CompositionEventHandler<T>
  onCompositionEndCapture?: CompositionEventHandler<T>
  onCompositionStart?: CompositionEventHandler<T>
  onCompositionStartCapture?: CompositionEventHandler<T>
  onCompositionUpdate?: CompositionEventHandler<T>
  onCompositionUpdateCapture?: CompositionEventHandler<T>

  // Focus Events
  onFocus?: FocusEventHandler<T>
  onFocusCapture?: FocusEventHandler<T>
  onBlur?: FocusEventHandler<T>
  onBlurCapture?: FocusEventHandler<T>

  // Form Events
  onChange?: FormEventHandler<T>
  onChangeCapture?: FormEventHandler<T>
  onBeforeInput?: FormEventHandler<T>
  onBeforeInputCapture?: FormEventHandler<T>
  onInput?: FormEventHandler<T>
  onInputCapture?: FormEventHandler<T>
  onReset?: FormEventHandler<T>
  onResetCapture?: FormEventHandler<T>
  onSubmit?: FormEventHandler<T>
  onSubmitCapture?: FormEventHandler<T>
  onInvalid?: FormEventHandler<T>
  onInvalidCapture?: FormEventHandler<T>

  // Image Events
  onLoad?: ReactEventHandler<T>
  onLoadCapture?: ReactEventHandler<T>
  onError?: ReactEventHandler<T> // also a Media Event
  onErrorCapture?: ReactEventHandler<T> // also a Media Event

  // Keyboard Events
  onKeyDown?: KeyboardEventHandler<T>
  onKeyDownCapture?: KeyboardEventHandler<T>
  onKeyPress?: KeyboardEventHandler<T>
  onKeyPressCapture?: KeyboardEventHandler<T>
  onKeyUp?: KeyboardEventHandler<T>
  onKeyUpCapture?: KeyboardEventHandler<T>

  // Media Events
  onAbort?: ReactEventHandler<T>
  onAbortCapture?: ReactEventHandler<T>
  onCanPlay?: ReactEventHandler<T>
  onCanPlayCapture?: ReactEventHandler<T>
  onCanPlayThrough?: ReactEventHandler<T>
  onCanPlayThroughCapture?: ReactEventHandler<T>
  onDurationChange?: ReactEventHandler<T>
  onDurationChangeCapture?: ReactEventHandler<T>
  onEmptied?: ReactEventHandler<T>
  onEmptiedCapture?: ReactEventHandler<T>
  onEncrypted?: ReactEventHandler<T>
  onEncryptedCapture?: ReactEventHandler<T>
  onEnded?: ReactEventHandler<T>
  onEndedCapture?: ReactEventHandler<T>
  onLoadedData?: ReactEventHandler<T>
  onLoadedDataCapture?: ReactEventHandler<T>
  onLoadedMetadata?: ReactEventHandler<T>
  onLoadedMetadataCapture?: ReactEventHandler<T>
  onLoadStart?: ReactEventHandler<T>
  onLoadStartCapture?: ReactEventHandler<T>
  onPause?: ReactEventHandler<T>
  onPauseCapture?: ReactEventHandler<T>
  onPlay?: ReactEventHandler<T>
  onPlayCapture?: ReactEventHandler<T>
  onPlaying?: ReactEventHandler<T>
  onPlayingCapture?: ReactEventHandler<T>
  onProgress?: ReactEventHandler<T>
  onProgressCapture?: ReactEventHandler<T>
  onRateChange?: ReactEventHandler<T>
  onRateChangeCapture?: ReactEventHandler<T>
  onSeeked?: ReactEventHandler<T>
  onSeekedCapture?: ReactEventHandler<T>
  onSeeking?: ReactEventHandler<T>
  onSeekingCapture?: ReactEventHandler<T>
  onStalled?: ReactEventHandler<T>
  onStalledCapture?: ReactEventHandler<T>
  onSuspend?: ReactEventHandler<T>
  onSuspendCapture?: ReactEventHandler<T>
  onTimeUpdate?: ReactEventHandler<T>
  onTimeUpdateCapture?: ReactEventHandler<T>
  onVolumeChange?: ReactEventHandler<T>
  onVolumeChangeCapture?: ReactEventHandler<T>
  onWaiting?: ReactEventHandler<T>
  onWaitingCapture?: ReactEventHandler<T>

  // MouseEvents
  onAuxClick?: MouseEventHandler<T>
  onAuxClickCapture?: MouseEventHandler<T>
  onClick?: MouseEventHandler<T>
  onClickCapture?: MouseEventHandler<T>
  onContextMenu?: MouseEventHandler<T>
  onContextMenuCapture?: MouseEventHandler<T>
  onDoubleClick?: MouseEventHandler<T>
  onDoubleClickCapture?: MouseEventHandler<T>
  onDrag?: DragEventHandler<T>
  onDragCapture?: DragEventHandler<T>
  onDragEnd?: DragEventHandler<T>
  onDragEndCapture?: DragEventHandler<T>
  onDragEnter?: DragEventHandler<T>
  onDragEnterCapture?: DragEventHandler<T>
  onDragExit?: DragEventHandler<T>
  onDragExitCapture?: DragEventHandler<T>
  onDragLeave?: DragEventHandler<T>
  onDragLeaveCapture?: DragEventHandler<T>
  onDragOver?: DragEventHandler<T>
  onDragOverCapture?: DragEventHandler<T>
  onDragStart?: DragEventHandler<T>
  onDragStartCapture?: DragEventHandler<T>
  onDrop?: DragEventHandler<T>
  onDropCapture?: DragEventHandler<T>
  onMouseDown?: MouseEventHandler<T>
  onMouseDownCapture?: MouseEventHandler<T>
  onMouseEnter?: MouseEventHandler<T>
  onMouseLeave?: MouseEventHandler<T>
  onMouseMove?: MouseEventHandler<T>
  onMouseMoveCapture?: MouseEventHandler<T>
  onMouseOut?: MouseEventHandler<T>
  onMouseOutCapture?: MouseEventHandler<T>
  onMouseOver?: MouseEventHandler<T>
  onMouseOverCapture?: MouseEventHandler<T>
  onMouseUp?: MouseEventHandler<T>
  onMouseUpCapture?: MouseEventHandler<T>

  // Selection Events
  onSelect?: ReactEventHandler<T>
  onSelectCapture?: ReactEventHandler<T>

  // Touch Events
  onTouchCancel?: TouchEventHandler<T>
  onTouchCancelCapture?: TouchEventHandler<T>
  onTouchEnd?: TouchEventHandler<T>
  onTouchEndCapture?: TouchEventHandler<T>
  onTouchMove?: TouchEventHandler<T>
  onTouchMoveCapture?: TouchEventHandler<T>
  onTouchStart?: TouchEventHandler<T>
  onTouchStartCapture?: TouchEventHandler<T>

  // Pointer Events
  onPointerDown?: PointerEventHandler<T>
  onPointerDownCapture?: PointerEventHandler<T>
  onPointerMove?: PointerEventHandler<T>
  onPointerMoveCapture?: PointerEventHandler<T>
  onPointerUp?: PointerEventHandler<T>
  onPointerUpCapture?: PointerEventHandler<T>
  onPointerCancel?: PointerEventHandler<T>
  onPointerCancelCapture?: PointerEventHandler<T>
  onPointerEnter?: PointerEventHandler<T>
  onPointerEnterCapture?: PointerEventHandler<T>
  onPointerLeave?: PointerEventHandler<T>
  onPointerLeaveCapture?: PointerEventHandler<T>
  onPointerOver?: PointerEventHandler<T>
  onPointerOverCapture?: PointerEventHandler<T>
  onPointerOut?: PointerEventHandler<T>
  onPointerOutCapture?: PointerEventHandler<T>
  onGotPointerCapture?: PointerEventHandler<T>
  onGotPointerCaptureCapture?: PointerEventHandler<T>
  onLostPointerCapture?: PointerEventHandler<T>
  onLostPointerCaptureCapture?: PointerEventHandler<T>

  // UI Events
  onScroll?: UIEventHandler<T>
  onScrollCapture?: UIEventHandler<T>

  // Wheel Events
  onWheel?: WheelEventHandler<T>
  onWheelCapture?: WheelEventHandler<T>

  // Animation Events
  onAnimationStart?: AnimationEventHandler<T>
  onAnimationStartCapture?: AnimationEventHandler<T>
  onAnimationEnd?: AnimationEventHandler<T>
  onAnimationEndCapture?: AnimationEventHandler<T>
  onAnimationIteration?: AnimationEventHandler<T>
  onAnimationIterationCapture?: AnimationEventHandler<T>

  // Transition Events
  onTransitionEnd?: TransitionEventHandler<T>
  onTransitionEndCapture?: TransitionEventHandler<T>
}

export interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
  // React-specific Attributes
  defaultChecked?: boolean
  defaultValue?: string | number | string[]
  suppressContentEditableWarning?: boolean
  suppressHydrationWarning?: boolean

  // Standard HTML Attributes
  accessKey?: string
  className?: string
  contentEditable?: Booleanish | "inherit"
  contextMenu?: string
  dir?: string
  draggable?: Booleanish
  hidden?: boolean
  id?: string
  lang?: string
  placeholder?: string
  slot?: string
  spellCheck?: Booleanish
  style?: CSSProperties
  tabIndex?: number
  title?: string
  translate?: "yes" | "no"

  // Unknown
  radioGroup?: string // <command>, <menuitem>

  // WAI-ARIA
  role?: string

  // RDFa Attributes
  about?: string
  datatype?: string
  inlist?: any
  prefix?: string
  property?: string
  resource?: string
  typeof?: string
  vocab?: string

  // Non-standard Attributes
  autoCapitalize?: string
  autoCorrect?: string
  autoSave?: string
  color?: string
  itemProp?: string
  itemScope?: boolean
  itemType?: string
  itemID?: string
  itemRef?: string
  results?: number
  security?: string
  unselectable?: "on" | "off"

  // Living Standard
  /**
   * Hints at the type of data that might be entered by the user while editing the element or its contents
   * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
   */
  inputMode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search"
  /**
   * Specify that a standard HTML element should behave like a defined custom built-in element
   * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
   */
  is?: string
}

export interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
  autoFocus?: boolean
  disabled?: boolean
  form?: string
  formAction?: string
  formEncType?: string
  formMethod?: string
  formNoValidate?: boolean
  formTarget?: string
  name?: string
  type?: "submit" | "reset" | "button"
  value?: string | string[] | number
}

export interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
  accept?: string
  alt?: string
  autoComplete?: string
  autoFocus?: boolean
  capture?: boolean | string // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
  checked?: boolean
  crossOrigin?: string
  disabled?: boolean
  form?: string
  formAction?: string
  formEncType?: string
  formMethod?: string
  formNoValidate?: boolean
  formTarget?: string
  height?: number | string
  list?: string
  max?: number | string
  maxLength?: number
  min?: number | string
  minLength?: number
  multiple?: boolean
  name?: string
  pattern?: string
  placeholder?: string
  readOnly?: boolean
  required?: boolean
  size?: number
  src?: string
  step?: number | string
  type?: string
  value?: string | string[] | number
  width?: number | string

  onChange?: ChangeEventHandler<T>
}

export interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
  form?: string
  htmlFor?: string
}

export interface IntrinsicElements {
  div: HTMLAttributes<HTMLDivElement>
  button: ButtonHTMLAttributes<HTMLButtonElement>
  span: HTMLAttributes<HTMLSpanElement>
  input: InputHTMLAttributes<HTMLInputElement>
  label: LabelHTMLAttributes<HTMLLabelElement>
}
