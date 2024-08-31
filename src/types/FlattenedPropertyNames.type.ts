import { PlainObject } from "./PlainObject.type";

/**
 * Represents a union type with all the properties of a given object flattened with a separator.
 * Default separator is `.`.
 *
 * Usage:
 * ```
 * interface FormValues {
 *   phoneNumber: string,
 *   address: {
 *     street: string,
 *     country: string
 *   }
 * }
 *
 * FlattenedPropertyNames<FormValues> === "phoneNumber" | "address.street" | "address.country"
 * FlattenedPropertyNames<FormValues, "_"> === "phoneNumber" | "address_street" | "address_country"
 *
 * ```
 */
export type FlattenedPropertyNames<
  Object extends PlainObject,
  JoinWith extends string = ".",
  Property = keyof Object
> = Property extends string
  ? Object[Property] extends Date
    ? Property
    : Object[Property] extends PlainObject
      ? `${Property}${JoinWith}${FlattenedPropertyNames<Object[Property]>}`
      : Property
  : never;
