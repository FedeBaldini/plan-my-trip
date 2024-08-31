import { PlainObject } from "./PlainObject.type";

/**
 * Represents the type that result from overriding the source object type
 * with overrides object type keys.
 */
export type Spread<Source extends PlainObject, Overrides extends PlainObject> = Omit<
  Source,
  keyof Overrides
> &
  Overrides;
