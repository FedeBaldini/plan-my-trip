/**
 * Represents a type `T` that can either be wrapped in a Promise or not
 */
export type MaybePromise<T> = T | Promise<T>;
