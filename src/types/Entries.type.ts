import { PlainObject } from "./PlainObject.type";

/**
 * Represents the strongly typed output for `Object.entries` that, by default,
 * it gets broadened to a generic `[string, any][]`.
 */
export type Entries<Object extends PlainObject> = {
  [Property in keyof Object]: [Property, Object[Property]];
}[keyof Object][];
