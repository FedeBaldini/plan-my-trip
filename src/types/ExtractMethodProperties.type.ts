import { PlainObject } from "./PlainObject.type";

/**
 * Represents a union type with all the properties of an object that are methods.
 *
 * Usage:
 * ```
 * interface Service {
 *   instanceVariable: string,
 *   anotherProperty: string,
 *   firstMethod(): void,
 *   anotherMethod(): void
 * }
 *
 * MethodProperties<Service> === "firstMethod" | "anotherMethod"
 * ```
 */
type MethodProperties<Input extends PlainObject> = {
  [Property in keyof Input]: Input[Property] extends Function ? Property : never;
}[keyof Input];

/**
 * Represents a type with only the methods of an input object.
 *
 * Usage:
 * ```
 * interface Service {
 *   instanceVariable: string,
 *   anotherProperty: string,
 *   firstMethod(): void,
 *   anotherMethod(): void
 * }
 *
 * ExtractMethods<Service> === {
 *   firstMethod(): void,
 *   anotherMethod(): void
 * }
 * ```
 */
export type ExtractMethodProperties<Input extends PlainObject> = Pick<
  Input,
  MethodProperties<Input>
>;
