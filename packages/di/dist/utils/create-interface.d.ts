import { InterfaceTag } from '../interfaces';
/**
 * Creates special interface-like anonymous class that acts like an interface
 * utilizing `Symbol.hasInstance` method that allows to override behavior of `instanceof` operator
 *
 * Example:
 *
 * export interface FooInterface {
 *    bar(): string;
 * }
 * export const FooInterface = createInterface<FooInterface>('FooInterface');
 *
 * @ImplementsAtRuntime(FooInterface)
 * export class Foo implements FooInterface {
 *    bar(): string {
 *      return 'bar';
 *    }
 * }
 *
 * const foo = new Foo();
 *
 * foo instanceof FooInterface === true;
 *
 */
export declare const createInterface: <I>(name: string) => InterfaceTag<I>;
