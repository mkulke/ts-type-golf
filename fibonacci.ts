type FibonacciAt<N>
  = N extends Z ? Z
  : N extends _1 ? _1
  : Add<FibonacciAt<P<N>>, FibonacciAt<Sub<N, _2>>>;

type FibonacciSeq<N, O extends any[] = []>
  = N extends Z ? O
  : FibonacciSeq<P<N>, Unshift<FibonacciAt<P<N>>, O>>;

type test_fibonacci = [
  Eq<FibonacciAt<_2>, _1>,
  Eq<FibonacciAt<_7>, _13>,
  Eq<FibonacciAt<Z>, Z>,
];

type test_fibonacci_seq = [
  Eq<FibonacciSeq<Z>, []>,
  Eq<FibonacciSeq<_6>, [Z, _1, _1, _2, _3, _5]>,
];

export {
  FibonacciAt,
  FibonacciSeq,
}
