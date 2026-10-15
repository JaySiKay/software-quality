# Лабораторна робота №3

## Модульне тестування програмного коду за допомогою Vitest

**Виконала: Скориніна Юлія**  
**Група: 6.1213-2**  
**Дата: 15.10.2026**

## Test Object

`src/shop-utils.js`

## Функції

- `calculateDiscount()`
- `validateQuantity()`
- `getShippingCost()`

## Test Design

**Test Basis:** price ≥ 0, 0 ≤ percent ≤ 100, result = price - price × percent / 100; неправильні аргументи - Error.

| Test Condition | price | percent | Expected |
|---|---:|---:|---|
| Звичайна знижка | 100 | 10 | 90 |
| Нижня межа знижки | 100 | 0 | 100 |
| Верхня межа знижки | 100 | 100 | 0 |
| Від'ємна ціна | -10 | 10 | Error: Price must be a non-negative number |
| Знижка більше 100%  | 100 | 150 | Error: Discount must be between 0 and 100 |

### validateQuantity

**Equivalence partitions:**

| Значення           | Partition | Expected |
|--------------------|---|---|
| < 1                | Invalid | false |
| 1 - 10, ціле число | Valid | true |
| > 10               | Invalid | false |
| не ціле число      | Invalid | false |

**Boundary values:** 

| quantity | Expected |
|---:|---|
| 0 | false |
| 1 | true |
| 2 | true |
| 9 | true |
| 10 | true |
| 11 | false |
| 1.5 | false |

### getShippingCost

Перевірені гілки:

| Гілка | total | Expected |
|---|---:|---|
| total < 0 | -1 | Error: Total must be a non-negative number |
| 0 ≤ total < 1000 | 999 | 100 |
| total ≥ 1000  | 1000 | 0 |

## Результати тестування

| Група тестів | Кількість | Result |
|---|---:|---|
| calculateDiscount | 5 | Pass |
| validateQuantity | 7 | Pass |
| getShippingCost | 3 | Pass |

15 / 15 passed.

## Coverage

| Metric | Result |
|---|---:|
| Statements | 100% (11/11) |
| Branches | 100% (18/18) |
| Functions | 100% (3/3) |
| Lines | 100% (11/11) |

## Висновок

У ході лабораторної роботи було створено 15 автоматизованих тестів за допомогою Vitest для трьох функцій модуля shop-utils.js. 
Усі тести пройдено успішно. Coverage Report показав що набір тестів покриває 100% за всіма метриками але це не гарантує відсутності дефектів: лише показує, що код виконувався, але не доводить правильність очікуваних результатів і повноту врахування вимог.
