import {
    describe,
    expect,
    test,
} from 'vitest';

import {
    calculateDiscount,
    validateQuantity,
    getShippingCost,
} from '../src/shop-utils.js';

describe('calculateDiscount', () => {
    test(
        'returns 90 for price 100 and discount 10%',
        () => {
            const price = 100;
            const percent = 10;

            const result = calculateDiscount(
                price,
                percent
            );
            expect(result).toBe(90);
        }
    );
    test(
        'returns 100 for price 100 and discount 0%',
        () => {
            const price = 100;
            const percent = 0;
            const result = calculateDiscount(
                price,
                percent
            );
            expect(result).toBe(100);
        }
    );

    test(
        'returns 0 for price 100 and discount 100%',
        () => {
            const price = 100;
            const percent = 100;
            const result = calculateDiscount(
                price,
                percent
            );
            expect(result).toBe(0);
        }
    );

    test(
        'throws error for negative price',
        () => {
            const price = -10;
            const percent = 10;
            expect(
                () => calculateDiscount(price, percent)
            ).toThrow(
                'Price must be a non-negative number'
            );
        }
    );
    test(
        'throws error for discount greater than 100%',
        () => {
            const price = 100;
            const percent = 120;
            expect(
                () => calculateDiscount(price, percent)
            ).toThrow(
                'Discount must be between 0 and 100'
            );
        }
    );
});

describe('validateQuantity', () => {
    test.for([
        { quantity: 0, expected: false },
        { quantity: 1, expected: true },
        { quantity: 2, expected: true },
        { quantity: 9, expected: true },
        { quantity: 10, expected: true },
        { quantity: 11, expected: false },
        { quantity: 1.5, expected: false },
    ])(
        'validateQuantity($quantity) returns $expected',
        ({ quantity, expected }) => {
            expect(
                validateQuantity(quantity)
            ).toBe(expected);
        }
    );
});

describe('getShippingCost', () => {
    test(
        'returns 100 for total below 1000',
        () => {
            const total = 999;
            const result = getShippingCost(total);
            expect(result).toBe(100);
        }
    );

    test(
        'returns 0 for total equal to 1000',
        () => {
            const total = 1000;
            const result = getShippingCost(total);
            expect(result).toBe(0);
        }
    );

    test(
        'throws error for negative total',
        () => {
            const total = -1;
            expect(
                () => getShippingCost(total)
            ).toThrow(
                'Total must be a non-negative number'
            );
        }
    );
});
