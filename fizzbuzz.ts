type IsDivisibleBy<N, D>
  = N extends Negative ? false
  : N extends Z ? true
  : IsDivisibleBy<Subtract<N, D>, D>;

type And<A, B>
  = A extends false ? false
  : B extends false ? false
  : true;

type IsDivisibleBy3<N> = IsDivisibleBy<N, _3>;
type IsDivisibleBy5<N> = IsDivisibleBy<N, _5>;
type IsDivisibleBy15<N> = And<IsDivisibleBy3<N>, IsDivisibleBy5<N>>;

type FizzBuzzNth<N>
  = IsDivisibleBy15<N> extends true ? 'FizzBuzz'
  : IsDivisibleBy3<N> extends true ? 'Fizz'
  : IsDivisibleBy5<N> extends true ? 'Buzz'
  : N;

type FizzBuzzUpTo<N, O extends any[] = []>
  = N extends Z ? O
  : FizzBuzzUpTo<Decrement<N>, Unshift<FizzBuzzNth<N>, O>>;

// type test_fizzbuzz = [
//   Eq<
//     FizzBuzzUpTo<_15>,
//     [
//       _1, _2, 'Fizz', _4, 'Buzz', 'Fizz', _7, _8, 'Fizz', 'Buzz', _11, 'Fizz', _13, _14, 'FizzBuzz',
//     ]
//   >,
// ];
