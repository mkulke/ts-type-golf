type Z = 0;

// type S<N> = [N, 1];
type S<N> = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
][Extract<N, number>];

type Eq<A, B extends A> = true;

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

type Negative = -1;

// type P<N>
//   = N extends S<infer M> ? M
//   : Negative;
type P<N> = [
  Negative,
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
][Extract<N, number>];

type Add<N, A>
  = A extends Z ? N
  : Add<S<N>, P<A>>;

type Sub<N, S>
  = S extends Z ? N
  : Sub<P<N>, P<S>>;

type Unshift<A, B extends any[]> = [A, ...B];

type Nat
  = Z
  | _1
  | _2
  | _3
  | _4
  | _5
  | _6
  | _7;
