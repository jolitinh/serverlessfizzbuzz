"use strict";

const { fizzbuzz } = require("./fizzbuzz");

module.exports.fizzbuzz = async event => {
  const { m, n } = JSON.parse(event.body);

  if (m > n) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "m must be less than n"
      })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `FizzBuzz result from ${m} to ${n}.`,
      result: fizzbuzz(m, n)
    })
  };
};
