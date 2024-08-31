/**
 * Represents a _typed_ generic function as a replacement for the `Function` type.
 *
 * According to Typescript documentation:
 * `Function` is an untyped function call and is generally best avoided because of the unsafe any return type.
 */
export type AnyFunction = (...args: any[]) => any;
