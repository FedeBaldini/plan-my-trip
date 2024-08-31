import { PlainObject } from "./PlainObject.type";

/**
 * Represents a union type with all the properties of an object that plain objects.
 *
 * Usage:
 * ```
 * interface Service {
 *   instanceVariable: string,
 *   anotherProperty: {
 *     aThirdProperty: number
 *   },
 *   firstMethod(): void,
 *   anotherMethod(): void
 * }
 *
 * PlainObjectProperties<Service> === "anotherProperty"
 * ```
 */
type PlainObjectProperties<Input extends PlainObject> = {
  [Property in keyof Input]: Input[Property] extends Function
    ? never
    : Input[Property] extends Date
      ? never
      : Input[Property] extends Array<any>
        ? never
        : Input[Property] extends PlainObject
          ? Property
          : never;
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
export type ExtractPlainObjectProperties<Input extends PlainObject> = Pick<
  Input,
  PlainObjectProperties<Input>
>;
