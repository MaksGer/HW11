const sum = require('../dist/index');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1)(2)()).toBe(3);
});

test('adds 4 + 5 + 9 to equal 18', () => {
    expect(sum(4)(5)(9)()).toBe(18);
});

test('adds 1 + 9 + 20 +(-10) to equal 20', () => {
    expect(sum(1)(9)(20)(-10)()).toBe(20);
});