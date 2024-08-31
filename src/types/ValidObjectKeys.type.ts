import { PlainObject } from "./PlainObject.type";

/**
 * Represents the union type of all the keys of an object that can be used
 * as a lookup key.
 */
export type ValidObjectKeys<Element extends PlainObject> = {
  [Key in keyof Element]: Element[Key] extends string | number | symbol ? Key : never;
}[keyof Element];
