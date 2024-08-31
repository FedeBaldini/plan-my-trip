import { PlainObject } from "./PlainObject.type";

/**
 * Alias for `keyof T`. Makes the array version more elegant.
 */
export type Keys<T extends PlainObject> = keyof T;
