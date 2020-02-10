const fizzbuzz = (m, n) => {
  let result = [];
  for (i = m; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 5 === 0) {
      result.push("Fizz");
    } else if (i % 3 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }

  return result;
};

module.exports = { fizzbuzz };
