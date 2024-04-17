import 'reflect-metadata';
import { InterfaceTag } from '../interfaces';
/**
 * Class decorator indicating that class implements interface at runtime
 *
 * This is needed for proper work of:
 * `foo instanceof IFoo`
 */
export declare const ImplementsAtRuntime: <T>(interfaceTag: InterfaceTag<T>) => (target: new (...args: any[]) => T) => any;
