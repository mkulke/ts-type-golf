type Z = 0;
type S<T> = [T, 1];

type _1 = S<Z>;
type _2 = S<_1>;
type _3 = S<_2>;
type _4 = S<_3>;
type _5 = S<_4>;
type _6 = S<_5>;
type _7 = S<_6>;
type _8 = S<_7>;
type _9 = S<_8>;
type _10 = S<_9>;
type _11 = S<_10>;
type _12 = S<_11>;
type _13 = S<_12>;
type _14 = S<_13>;
type _15 = S<_14>;

type Add<N, A>
  = A extends Z ? N
  : A extends S<infer B> ? S<Add<N, B>>
  : never;

type Eq<A, B extends A> = true;

type test_add = Eq<Add<_1, _2>, _3>;

type Fibonacci<N>
  = N extends Z ? Z
  : N extends S<Z> ? S<Z>
  : N extends S<S<infer R>> ? Add<Fibonacci<S<R>>, Fibonacci<R>>
  : never;

type test_fibonacci = [
  Eq<Fibonacci<_4>, _3>,
  Eq<Fibonacci<_7>, _13>,
  Eq<Fibonacci<Z>, Z>,
];








type Unshift<A, B extends any[]> = [A, ...B];

type FibonacciSeq<N, O extends any[] = []>
  = N extends Z ? O
  : N extends S<infer R> ? FibonacciSeq<R, Unshift<Fibonacci<R>, O>>
  : never;

type test_fibonacci_seq = [
  Eq<FibonacciSeq<Z>, []>,
  Eq<FibonacciSeq<_6>, [Z, _1, _1, _2, _3, _5]>,
];
