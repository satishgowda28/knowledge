/* To understan curry */
const basicCurry = (f) => (x) => (y) => f(x, y);

const curryWithBind = (fn) => {
  const arity = fn.length;
  const $curry = (...args) => {
    if (args.length < arity) {
      return $curry.bind(null, ...args);
    }
    return fn.apply(null, ...args);
  };
  return $curry;
};

const curryWithBind2 = (fn) => {
  console.log({ "fn.length": fn.length });
  return fn.length === 0
    ? fn()
    : (...p) => {
        console.log(p);
        return curryWithBind2(fn.bind(null, ...p));
      };
};
