const lib = require('./lib');

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      expect(lib.sum(1, 2)).toEqual(3);
      expect(lib.sum(-10, 5)).toEqual(-5);
      expect(lib.sum(-10, 10)).toEqual(0);
    });

    it('should convert strings to numbers', () => {
      expect(lib.sum('5', '1')).toEqual(6);
      expect(lib.sum(10, '1')).toEqual(11);
    });

    it('should return NaN if one parameter is skipped', () => {
      expect(lib.sum(1)).toBeNaN();
    });
  });

  describe('Test suite for testing subtraction function', () => {
    it('should return subtraction of two numbers', () => {
      expect(lib.subtraction(5, 1)).toEqual(4);
      expect(lib.subtraction(1, 5)).toEqual(-4);
      expect(lib.subtraction(-5, -5)).toEqual(0);
    });

    it('should convert strings to numbers', () => {
      expect(lib.subtraction('10', '3')).toEqual(7);
      expect(lib.subtraction(10, '3')).toEqual(7);
    });

    it('should work with decimals', () => {
      expect(lib.subtraction(0.5, 0.25)).toBeCloseTo(0.25);
    });

    it('should return NaN for invalid input', () => {
      expect(lib.subtraction('abc', 1)).toBeNaN();
      expect(lib.subtraction(1)).toBeNaN();
    });
  });

  describe('Test suite for testing division function', () => {
    it('should return division of two numbers', () => {
      expect(lib.division(10, 2)).toEqual(5);
      expect(lib.division(1, 4)).toEqual(0.25);
      expect(lib.division(-9, 3)).toEqual(-3);
      expect(lib.division(-9, -3)).toEqual(3);
    });

    it('should convert strings to numbers', () => {
      expect(lib.division('20', '4')).toEqual(5);
      expect(lib.division(20, '5')).toEqual(4);
    });

    it('should return 0 when dividend is 0', () => {
      expect(lib.division(0, 5)).toEqual(0);
      expect(lib.division(0, -5)).toEqual(0); // not -0
    });

    it('should throw an error on division by zero', () => {
      expect(() => lib.division(5, 0)).toThrow('Division by zero');
      expect(() => lib.division(0, 0)).toThrow();
      expect(() => lib.division(5, '0')).toThrow();
    });
  });

  describe('Test suite for testing multiplication function', () => {
    it('should return multiplication of two numbers', () => {
      expect(lib.multiplication(3, 4)).toEqual(12);
      expect(lib.multiplication(-3, 4)).toEqual(-12);
      expect(lib.multiplication(-3, -4)).toEqual(12);
    });

    it('should convert strings to numbers', () => {
      expect(lib.multiplication('3', '4')).toEqual(12);
      expect(lib.multiplication(3, '4')).toEqual(12);
    });

    it('should return 0 when one of the numbers is 0 (not -0)', () => {
      expect(lib.multiplication(0, 5)).toEqual(0);
      expect(lib.multiplication(-5, 0)).toEqual(0);
    });

    it('should work with decimals', () => {
      expect(lib.multiplication(0.5, 4)).toEqual(2);
    });
  });

  describe('Test suite for testing percentage function', () => {
    it('should calculate percent from number', () => {
      expect(lib.percentage(200, 10)).toEqual(20);
      expect(lib.percentage(50, 50)).toEqual(25);
      expect(lib.percentage(80, 100)).toEqual(80);
    });

    it('should return 0 for 0 percent or 0 value', () => {
      expect(lib.percentage(100, 0)).toEqual(0);
      expect(lib.percentage(0, 50)).toEqual(0);
    });

    it('should support percent greater than 100 and negative values', () => {
      expect(lib.percentage(50, 200)).toEqual(100);
      expect(lib.percentage(-200, 10)).toEqual(-20);
    });

    it('should convert strings to numbers', () => {
      expect(lib.percentage('200', '10')).toEqual(20);
    });
  });

  describe('Test suite for testing getWholeNumberPart function', () => {
    it('should return whole part of positive number', () => {
      expect(lib.getWholeNumberPart(5.7)).toEqual(5);
      expect(lib.getWholeNumberPart(5)).toEqual(5);
    });

    it('should return whole part of negative number (truncate, not floor)', () => {
      expect(lib.getWholeNumberPart(-5.7)).toEqual(-5);
    });

    it('should return 0 for numbers between -1 and 1 (not -0)', () => {
      expect(lib.getWholeNumberPart(0.9)).toEqual(0);
      expect(lib.getWholeNumberPart(-0.9)).toEqual(0);
    });

    it('should convert strings to numbers', () => {
      expect(lib.getWholeNumberPart('12.34')).toEqual(12);
    });
  });

  describe('Test suite for testing getEvenNumbers function', () => {
    it('should return only even numbers', () => {
      expect(lib.getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });

    it('should return empty array if there are no even numbers', () => {
      expect(lib.getEvenNumbers([1, 3, 5])).toEqual([]);
    });

    it('should return empty array for empty input', () => {
      expect(lib.getEvenNumbers([])).toEqual([]);
    });

    it('should return all numbers if all are even', () => {
      expect(lib.getEvenNumbers([2, 4, 8])).toEqual([2, 4, 8]);
    });

    it('should not mutate the original array', () => {
      const original = [1, 2, 3, 4];
      lib.getEvenNumbers(original);
      expect(original).toEqual([1, 2, 3, 4]);
    });
  });

  describe('Test suite for testing getMaxNumber function', () => {
    it('should return max number from array', () => {
      expect(lib.getMaxNumber([1, 5, 3])).toEqual(5);
      expect(lib.getMaxNumber([5, 1, 3])).toEqual(5);
      expect(lib.getMaxNumber([1, 3, 5])).toEqual(5);
    });

    it('should work with negative numbers', () => {
      expect(lib.getMaxNumber([-5, -1, -3])).toEqual(-1);
    });

    it('should work with one element', () => {
      expect(lib.getMaxNumber([7])).toEqual(7);
    });

    it('should throw an error for empty array', () => {
      expect(() => lib.getMaxNumber([])).toThrow('Array must not be empty');
    });
  });

  describe('Test suite for testing getMinAndMaxNumbers function', () => {
    it('should return object with min and max', () => {
      expect(lib.getMinAndMaxNumbers([3, 1, 5, 2])).toEqual({ min: 1, max: 5 });
    });

    it('should work with negative numbers', () => {
      expect(lib.getMinAndMaxNumbers([-3, -10, 0])).toEqual({ min: -10, max: 0 });
    });

    it('should return the same value for min and max if one element', () => {
      expect(lib.getMinAndMaxNumbers([4])).toEqual({ min: 4, max: 4 });
    });

    it('should work if min is first and max is last (and the reverse)', () => {
      expect(lib.getMinAndMaxNumbers([1, 2, 3])).toEqual({ min: 1, max: 3 });
      expect(lib.getMinAndMaxNumbers([3, 2, 1])).toEqual({ min: 1, max: 3 });
    });

    it('should throw an error for empty array', () => {
      expect(() => lib.getMinAndMaxNumbers([])).toThrow('Array must not be empty');
    });
  });

  describe('Test suite for testing arithmeticMeans function', () => {
    it('should return arithmetic mean of numbers', () => {
      expect(lib.arithmeticMeans([1, 2, 3])).toEqual(2);
      expect(lib.arithmeticMeans([2, 4, 6, 8])).toEqual(5);
    });

    it('should work with negative numbers', () => {
      expect(lib.arithmeticMeans([-2, 2])).toEqual(0);
      expect(lib.arithmeticMeans([-4, -2])).toEqual(-3);
    });

    it('should return a fractional result when needed', () => {
      expect(lib.arithmeticMeans([1, 2])).toEqual(1.5);
    });

    it('should work with one element', () => {
      expect(lib.arithmeticMeans([9])).toEqual(9);
    });

    it('should throw an error for empty array', () => {
      expect(() => lib.arithmeticMeans([])).toThrow('Array must not be empty');
    });
  });

  describe('Test suite for testing getVowels function', () => {
    it('should return vowels from english string', () => {
      expect(lib.getVowels('hello world')).toEqual(['e', 'o', 'o']);
    });

    it('should return vowels from ukrainian string', () => {
      expect(lib.getVowels('привіт')).toEqual(['и', 'і']);
      expect(lib.getVowels('єдність')).toEqual(['є', 'і']);
    });

    it('should be case insensitive and keep the original case', () => {
      expect(lib.getVowels('AbEc')).toEqual(['A', 'E']);
    });

    it('should return empty array if there are no vowels', () => {
      expect(lib.getVowels('rhythm')).toEqual([]);
      expect(lib.getVowels('')).toEqual([]);
      expect(lib.getVowels('123 !?')).toEqual([]);
    });
  });

  describe('Test suite for testing cancatString function', () => {
    it('should concat array of strings into one string', () => {
      expect(lib.cancatString(['a', 'b', 'c'])).toEqual('abc');
      expect(lib.cancatString(['Hello, ', 'world', '!'])).toEqual('Hello, world!');
    });

    it('should return empty string for empty array', () => {
      expect(lib.cancatString([])).toEqual('');
    });

    it('should work with one element', () => {
      expect(lib.cancatString(['one'])).toEqual('one');
    });
  });

  describe('Test suite for testing splitString function', () => {
    it('should split string by divider', () => {
      expect(lib.splitString('a,b,c', ',')).toEqual(['a', 'b', 'c']);
      expect(lib.splitString('one two three', ' ')).toEqual(['one', 'two', 'three']);
    });

    it('should return array with the whole string if divider is not found', () => {
      expect(lib.splitString('abc', ',')).toEqual(['abc']);
    });

    it('should split into characters by empty divider', () => {
      expect(lib.splitString('abc', '')).toEqual(['a', 'b', 'c']);
    });

    it('should keep empty parts', () => {
      expect(lib.splitString('a,,b', ',')).toEqual(['a', '', 'b']);
    });
  });

  describe('Test suite for testing hasSubString function', () => {
    it('should return true if string contains substring', () => {
      expect(lib.hasSubString('hello world', 'world')).toBe(true);
      expect(lib.hasSubString('hello', 'hello')).toBe(true);
    });

    it('should return false if string does not contain substring', () => {
      expect(lib.hasSubString('hello world', 'bye')).toBe(false);
    });

    it('should be case sensitive', () => {
      expect(lib.hasSubString('Hello', 'hello')).toBe(false);
    });

    it('should return true for empty substring', () => {
      expect(lib.hasSubString('abc', '')).toBe(true);
    });
  });

  describe('Test suite for testing isLowerCase function', () => {
    it('should return true for lower case letters', () => {
      expect(lib.isLowerCase('a')).toBe(true);
      expect(lib.isLowerCase('я')).toBe(true);
    });

    it('should return false for upper case letters', () => {
      expect(lib.isLowerCase('A')).toBe(false);
      expect(lib.isLowerCase('Я')).toBe(false);
    });

    it('should return false for characters without case', () => {
      expect(lib.isLowerCase('1')).toBe(false);
      expect(lib.isLowerCase(' ')).toBe(false);
      expect(lib.isLowerCase('!')).toBe(false);
    });
  });
});