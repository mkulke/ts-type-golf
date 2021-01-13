import { FibonacciSeq, FibonacciAt, } from './fibonacci';

const x: FibonacciSeq<Z> = [];
const y: FibonacciSeq<_5> = [0, 1, 1, 2, 3];

function bla(): FibonacciSeq<Nat> {
  return [0, 1, 1, 2, 3, 5, 8];
}

function onlyFib(fib: FibonacciAt<Nat>): void {
  console.log(fib);
}

onlyFib(3);
