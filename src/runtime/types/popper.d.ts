import type { Placement, PositioningStrategy } from '@popperjs/core'

export interface PopperOptions {
  locked?: boolean
  overflowPadding?: number
  offsetDistance?: number
  offsetSkid?: number
  placement?: Placement
  strategy?: PositioningStrategy
}
