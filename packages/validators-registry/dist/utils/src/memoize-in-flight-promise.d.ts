/**
 * Method and Getter Decorator to memoize promise, returned from a first call in a bunch of parallel multiple calls,
 * Promise is memoized until first returned promise is finalized.
 *
 *
 * Example:
 *
 * const A = [1,2,3];
 * const B = [1,2,3,4];
 *
 * class Foo {
 *  @DebouncePromise()
 *  async function doSomethingAsync<A>(args: A): Promise<A> {
 *      await sleep(1000);
 *      return args;
 *  }
 * }
 *
 * const foo = new Foo();
 *
 * await Promise.all([
 *    foo.doSomethingAsync(A), // will be called, will return Promise<A>
 *    foo.doSomethingAsync(A), // decorated function will not be called, but decorator will return the same Promise<A> from previous function call
 *    foo.doSomethingAsync(B), // this also will be called (arguments are different), will return Promise<B>
 *    foo.doSomethingAsync(B)  // decorated function will not be called, but decorator will return the same Promise<B> from previous function call
 * ]);
 *
 */
export declare const MemoizeInFlightPromise: <A, R>() => MethodDecorator;
