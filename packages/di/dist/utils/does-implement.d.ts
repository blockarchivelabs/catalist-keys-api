import 'reflect-metadata';
import { InterfaceTag } from '../interfaces';
/**
 * Checks that target implements specific interface tag
 */
export declare const doesImplement: <T>(target: any, interfaceTag: InterfaceTag<any>) => target is T;
