export declare function OneAtTime(): <T extends (...args: any[]) => Promise<unknown>>(target: unknown, propertyName: string, descriptor: TypedPropertyDescriptor<T>) => void;
