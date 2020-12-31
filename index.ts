import { FibonacciSeq, FibonacciAt, } from './fibonacci';

const x: FibonacciSeq<_0> = [];
const y: FibonacciSeq<_5> = [0, 1, 1, 2, 3];

function bla(): FibonacciSeq<Numbers> {
  return [0, 1, 1, 2, 3, 5, 8];
}

function onlyFib(fib: FibonacciAt<Numbers>): void {
  console.log(fib);
}

onlyFib(8);
