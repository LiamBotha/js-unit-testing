const { capitalize, reverseString, calculator, caesarCipher, arrayAnalyze } = require('./functions');

test('Simple Capitalize 1', () => {
    expect(capitalize('apple')).toBe('Apple');
});

test('Simple Capitalize 2', () => {
    expect(capitalize('orange')).toBe('Orange');
});

test('Reverse String 1', () => {
    expect(reverseString('Pear')).toBe('raeP');
});

test('Reverse String 2', () => {
    expect(reverseString('snap crackle pop')).toBe('pop elkcarc pans');
})

test('Calculator Add 1', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('Calculator Add 2', () => {
    expect(calculator.add(-5, 23)).toBe(18);
});

test('Calculator Subract 1', () => {
    expect(calculator.subtract(10, 5)).toBe(5);
});

test('Calculator Subract 2', () => {
    expect(calculator.subtract(2, 10)).toBe(-8);
});

test('Calculator Divide 1', () => {
    expect(calculator.divide(20, 2)).toBe(10);
});

test('Calculator Divide 2', () => {
    expect(calculator.divide(2, 4)).toBe(0.5);
});

test('Calculator Multiply 1', () => {
    expect(calculator.multiply(5, 6)).toBe(30);
});

test('Calculator Multiply 2', () => {
    expect(calculator.multiply(0.2, 26)).toBe(5.2);
});

test('Caeser Cipher 1', () => {
    expect(caesarCipher('abcd', 2)).toBe('cdef');
});

test('Caeser Cipher 2', () => {
    expect(caesarCipher('afdeg', 3)).toBe('dighj');
});

test('Caeser Cipher Wrap Around', () => {
    expect(caesarCipher('zxy', 5)).toBe('ecd');
});

test('Caeser Cipher Wrap Around 2', () => {
    expect(caesarCipher("going to work", 11)).toBe("rztyr ez hzcv");
});

test('Caeser Cipher Case Sensitive', () => {
    expect(caesarCipher("AbCdEfZ", 3)).toBe("DeFgHiC");
});

test('Caeser Cipher Case Sensitive 2', () => {
    expect(caesarCipher("ZAXBzaxb", 8)).toBe("HIFJhifj");
});

test('Analyze Array 1', () => {
    expect(arrayAnalyze([1,2,3])).toEqual({ average: 2, min: 1, max: 3, length:3 });
});

test('Analyze Array 2', () => {
    expect(arrayAnalyze([5, 8, 21, 58])).toEqual({ average: 23, min: 5, max: 58, length:4 });
});