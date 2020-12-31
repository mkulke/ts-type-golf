type _0 = 0;

// type Increment<N> = [N, 1];
type Increment<N extends number> = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
][N];

type Eq<A, B extends A> = true;

type _1 = Increment<_0>;
type _2 = Increment<_1>;
type _3 = Increment<_2>;
type _4 = Increment<_3>;
type _5 = Increment<_4>;
type _6 = Increment<_5>;
type _7 = Increment<_6>;
type _8 = Increment<_7>;
type _9 = Increment<_8>;
type _10 = Increment<_9>;
type _11 = Increment<_10>;
type _12 = Increment<_11>;
type _13 = Increment<_12>;
type _14 = Increment<_13>;
type _15 = Increment<_14>;

type Negative = -1;

// type Decrement<N> = N extends Increment<infer M> ? M : Negative;
type Decrement<N extends number> = [
  Negative,
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
][N];


type Subtract<N, S> = S extends _0 ? N : Subtract<Decrement<N>, Decrement<S>>;

type Add<N, S> = S extends _0 ? N : Add<Increment<N>, Decrement<S>>;

type test_add = [Eq<Add<_1, _2>, _3>];

export type FibonacciAt<N> = N extends _0
  ? _0
  : N extends _1
  ? _1
  : Add<FibonacciAt<Decrement<N>>, FibonacciAt<Subtract<N, _2>>>;

type FibonacciSeq<N, O extends any[] = []> = N extends _0
  ? O
  : FibonacciSeq<Decrement<N>, Unshift<FibonacciAt<Decrement<N>>, O>>;

type test_fibonacci = [
  Eq<FibonacciAt<_2>, _1>,
  Eq<FibonacciAt<_7>, _13>,
  Eq<FibonacciAt<_0>, _0>,
];

type test_fibonacci_seq = [
  Eq<FibonacciSeq<_0>, []>,
  Eq<FibonacciSeq<_6>, [_0, _1, _1, _2, _3, _5]>,
];

type IsDivisibleBy<N, D> = N extends Negative
  ? false
  : N extends _0
  ? true
  : IsDivisibleBy<Subtract<N, D>, D>;

type And<A, B> = A extends false ? false : B extends false ? false : true;

type IsDivisibleBy3<N> = IsDivisibleBy<N, _3>;
type IsDivisibleBy5<N> = IsDivisibleBy<N, _5>;
type IsDivisibleBy15<N> = And<IsDivisibleBy3<N>, IsDivisibleBy5<N>>;

type FizzBuzzNth<N> = IsDivisibleBy15<N> extends true
  ? 'FizzBuzz'
  : IsDivisibleBy3<N> extends true
  ? 'Fizz'
  : IsDivisibleBy5<N> extends true
  ? 'Buzz'
  : N;

type Unshift<A, B extends any[]> = [A, ...B];

type FizzBuzzUpTo<N, O extends any[] = []> = N extends _0
  ? O
  : FizzBuzzUpTo<Decrement<N>, Unshift<FizzBuzzNth<N>, O>>;

type test_fizzbuzz = [
  Eq<
    FizzBuzzUpTo<_15>,
    [
      _1,
      _2,
      'Fizz',
      _4,
      'Buzz',
      'Fizz',
      _7,
      _8,
      'Fizz',
      'Buzz',
      _11,
      'Fizz',
      _13,
      _14,
      'FizzBuzz',
    ]
  >,
];

type Numbers
  = _0
  | _1
  | _2
  | _3
  | _4
  | _5
  | _6
  | _7;
