type test_subtract = Eq<Sub<_3, _2>, _1>;
type test_add = Eq<Add<_1, _2>, _3>;
type test_unshift = Eq<[1, 2], Unshift<1, [2]>>;
// type test_unshift_fail = Eq<[1, 2], Unshift<1, [2, 3]>>;
