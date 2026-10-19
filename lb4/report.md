# Лабораторна робота №4
## Тестування HTTP API за допомогою Postman

**Виконав:** Скориніна Юлія
**Група:** 6.1213-2-пі
**Дата:** 19.10.2026

## Test Object
Postman Echo. Base URL: `https://postman-echo.com`

## Collection
`Lab 4 - API Testing`. Collection Variable: `baseUrl = https://postman-echo.com`

## Загальний результат
| Request | Tests | Passed | Failed |
| :--- | :--- | :--- | :--- |
| GET with Params | 4 | 4 | 0 |
| POST JSON | 5 | 5 | 0 |
| Negative - 404 | 2 | 2 | 0 |
| **Усього** | **11** | **11** | **0** |

## Висновок
Навчились створювати та організовувати API Requests у Postman, використовувати Collection Variables, аналізувати фактичний Response, 
створювати автоматизовані Post-response Tests за допомогою pm.test(), pm.response та pm.expect(), а також виконувати позитивні й негативні 
перевірки API відповідно до заданого Test Basis.