# Лабораторна робота №2

## Проєктування тестів. Checklist, Test Cases та Decision Table
**Виконала:** Скориніна Юлія
**Група:** 6.1213-2-пі
## Тестовий об’єкт
SauceDemo
https://www.saucedemo.com/
## Тестове середовище
- Операційна система: Windows 11
- Браузер: Google Chrome
- Дата тестування: 14.10.2026
---

## 1. Test Conditions

- TCND-01 - успішна авторизація валідного користувача;
- TCND-02 - авторизація з неправильним Username;
- TCND-03 - авторизація з неправильним Password;
- TCND-04 - авторизація з порожнім Username;
- TCND-05 - авторизація з порожнім Password;
- TCND-06 - авторизація заблокованого користувача.

## 2. Checklist

- [ ] Успішна авторизація з валідними даними.
- [ ] Відмова в авторизації з неправильним Username.
- [ ] Відмова в авторизації з неправильним Password.
- [ ] Перевірка порожнього Username.
- [ ] Перевірка порожнього Password.
- [ ] Відмова в авторизації заблокованого користувача.

---

## 4. Test Cases

### TC-LOGIN-01

| Поле | Значення |
|------|----------|
| **ID** | TC-LOGIN-01 |
| **Title** | Успішна авторизація standard_user |
| **Type** | Positive |
| **Preconditions** | Відкрита сторінка Login SauceDemo. Користувач не авторизований. |
| **Test Data** | Username: `standard_user`<br>Password: `secret_sauce` |
| **Steps** | 1. У поле Username ввести `standard_user`.<br>2. У поле Password ввести `secret_sauce`.<br>3. Натиснути кнопку Login. |
| **Expected Result** | Після введення `standard_user` і правильного пароля та натискання Login користувач успішно авторизується і переходить на сторінку Products. |
| **Actual Result** | Після введення `standard_user` і правильного пароля та натискання Login відкрилася сторінка Products. |
| **Result** | Pass |

### TC-LOGIN-02

| Поле | Значення |
|------|----------|
| **ID** | TC-LOGIN-02 |
| **Title** | Відхилення авторизації standard_user з неправильним паролем |
| **Type** | Negative |
| **Preconditions** | Відкрита сторінка Login SauceDemo. Користувач не авторизований. |
| **Test Data** | Username: `standard_user`<br>Password: `wrong_password` |
| **Steps** | 1. У поле Username ввести `standard_user`.<br>2. У поле Password ввести `wrong_password`.<br>3. Натиснути кнопку Login. |
| **Expected Result** | Після введення `standard_user` і неправильного пароля та натискання Login авторизація не виконується, користувач залишається на сторінці Login і бачить повідомлення `Epic sadface: Username and password do not match any user in this service`. |
| **Actual Result** | Після введення `standard_user` і неправильного пароля та натискання Login користувач залишився на сторінці Login, відобразилося повідомлення `Epic sadface: Username and password do not match any user in this service`. |
| **Result** | Pass |

### TC-LOGIN-03

| Поле | Значення |
|------|----------|
| **ID** | TC-LOGIN-03 |
| **Title** | Відхилення авторизації заблокованого locked_out_user |
| **Type** | Negative |
| **Preconditions** | Відкрита сторінка Login SauceDemo. Користувач не авторизований. |
| **Test Data** | Username: `locked_out_user`<br>Password: `secret_sauce` |
| **Steps** | 1. У поле Username ввести `locked_out_user`.<br>2. У поле Password ввести `secret_sauce`.<br>3. Натиснути кнопку Login. |
| **Expected Result** | Після введення `locked_out_user` і правильного пароля та натискання Login авторизація не виконується, користувач залишається на сторінці Login і бачить повідомлення `Epic sadface: Sorry, this user has been locked out`. |
| **Actual Result** | Після введення `locked_out_user` і правильного пароля та натискання Login користувач залишився на сторінці Login, відобразилося повідомлення `Epic sadface: Sorry, this user has been locked out.` |
| **Result** | Pass |

---

## 5. Decision Table

**Умови:**
- C1 — Username входить до списку допустимих?
- C2 — Password правильний?
- C3 — Користувач заблокований?

**Дії:**
- A1 — перейти до Products
- A2 — показати повідомлення про блокування
- A3 — показати повідомлення про неправильні credentials

| Умови / Дії | R1 | R2 | R3 | R4 | R5 |
|-------------|:--:|:--:|:--:|:--:|:--:|
| C1: Username входить до списку допустимих? | T | T | F | T | F |
| C2: Password правильний? | T | T | T | F | F |
| C3: Користувач заблокований? | F | T | – | – | – |
| A1: Products | X | | | | |
| A2: Locked message | | X | | | |
| A3: Invalid credentials | | | X | X | X |

- **R1.** Username valid + Password valid + not locked = Products
- **R2.** Username valid + Password valid + locked = Login denied
- **R3.** invalid Username + valid Password = Invalid credentials
- **R4.** valid Username + invalid Password = Invalid credentials
- **R5.** invalid Username + valid Password = Invalid credentials

> Випадки “порожній Username” та “порожній Password” до цієї таблиці не включаємо. Це пов’язано з реалізацією (SauceDemo перевіряє окремо до перевірки credentials). Їх ми вже включили в checklist як окремі Test Conditions.

### Покриття правил Test Cases

| Правило | Test Case |
|---------|-----------|
| R1 | TC-LOGIN-01 |
| R2 | TC-LOGIN-03 |
| R3 | - |
| R4 | TC-LOGIN-02 |
| R5 | - |

---

## 6. Підсумкова таблиця результатів

| Test Case | Type | Result |
|-----------|------|--------|
| TC-LOGIN-01 | Positive | Pass |
| TC-LOGIN-02 | Negative | Pass |
| TC-LOGIN-03 | Negative | Pass |

