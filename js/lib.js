/**
 * This function must add two numbers and return sum of numbers
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function sum(a, b) {
  return Number(a) + Number(b);
}

/**
 * This function must subtraction two numbers and return result of subtraction
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function subtraction(a, b) {
  return Number(a) - Number(b);
}

/**
 * This function must division two numbers and return result according to all arithmetic rules
 * Division by zero is not defined in arithmetic, so an Error is thrown.
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function division(a, b) {
  if (Number(b) === 0) {
    throw new Error('Division by zero');
  }

  // "+ 0" turns -0 into 0
  return Number(a) / Number(b) + 0;
}

/**
 * This function return result of multiplication two numbers according to all arithmetic rules
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function multiplication(a, b) {
  // "+ 0" turns -0 into 0
  return Number(a) * Number(b) + 0;
}

/**
 * This function calculate percent from number according to all arithmetic rules
 * @param value {number|string}
 * @param percent {number|string}
 * @returns {number}
 */
function percentage(value, percent) {
  return multiplication(value, percent) / 100;
}

/**
 * This function return whole part of number
 * @param number {number|string}
 * @returns {number}
 */
function getWholeNumberPart(number) {
  // "+ 0" turns -0 into 0
  return Math.trunc(Number(number)) + 0;
}

/**
 * This function get array of natural number and return array of even number
 * @param numbers {number[]}
 * @returns {number[]}
 */
function getEvenNumbers(numbers) {
  return numbers.filter((n) => n % 2 === 0);
}

/**
 * This function get get Max number from array
 * @param numbers {number[]}
 * @returns {number}
 */
function getMaxNumber(numbers) {
  return getMinAndMaxNumbers(numbers).max;
}

/**
 * This function return object with min and  max number from array
 * @param numbers {number[]}
 * @returns {{min: number, max: number}}
 */
function getMinAndMaxNumbers(numbers) {
  if (numbers.length === 0) {
    throw new Error('Array must not be empty');
  }

  let min = numbers[0];
  let max = numbers[0];

  for (const n of numbers) {
    if (n < min) min = n;
    if (n > max) max = n;
  }

  return { min, max };
}

/**
 * This function calculate arithmetic means from array of numbers
 * @param numbers {number[]}
 * @returns {number}
 */
function arithmeticMeans(numbers) {
  if (numbers.length === 0) {
    throw new Error('Array must not be empty');
  }

  const total = numbers.reduce((acc, n) => acc + n, 0);

  return total / numbers.length;
}

/**
 * This function return array of vowerls form string
 * Supports english (a e i o u) and ukrainian (а е є и і ї о у ю я) vowels.
 * @param str {string}
 * @returns {string[]}
 */
function getVowels(str) {
  return str.match(/[aeiouаеєиіїоуюя]/gi) || [];
}

/**
 * This function get array of string and concat them into one string
 * @param str {string[]}
 * @returns {string}
 */
function cancatString(str) {
  return str.join('');
}

/**
 * This function split string according to divider
 * @param str {string}
 * @param divider {string}
 * @returns {string[]}
 */
function splitString(str, divider) {
  return str.split(divider);
}

/**
 * This function return true if string contains substring
 * @param str {string}
 * @param subStr {string}
 * @returns {boolean}
 */
function hasSubString(str, subStr) {
  return str.includes(subStr);
}

/**
 * This function return true if char is in lower case
 * Characters without case (digits, spaces, symbols) are not lower case.
 * @param char {string}
 * @returns {boolean}
 */
function isLowerCase(char) {
  return char === char.toLowerCase() && char !== char.toUpperCase();
}

module.exports = {
  sum,
  subtraction,
  division,
  multiplication,
  percentage,
  getWholeNumberPart,
  getEvenNumbers,
  getMaxNumber,
  getMinAndMaxNumbers,
  arithmeticMeans,
  getVowels,
  cancatString,
  splitString,
  hasSubString,
  isLowerCase
}