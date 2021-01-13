type Z = 0;

// type Increment<N> = [N, 1];
type Increment<N> = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
][Extract<N, number>];

type Eq<A, B extends A> = true;

type _1 = Increment<Z>;
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

// type Decrement<N>
//   = N extends Increment<infer M> ? M
//   : Negative;
type Decrement<N> = [
  Negative,
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
][Extract<N, number>];

type Add<N, A>
  = A extends Z ? N
  : Add<Increment<N>, Decrement<A>>;

type Subtract<N, S>
  = S extends Z ? N
  : Subtract<Decrement<N>, Decrement<S>>;

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
