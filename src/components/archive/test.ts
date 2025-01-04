const res = [
  { a: true, b: false },
  { a: false, b: false },
  { a: false, b: true },
].reduce((acc, item) => ({ a: item.a || acc.a, b: item.b || acc.b }), {
  a: false,
  b: false,
});
console.log(res);
