// Створіть об'єкт car1 з такими властивостями:
// brand: рядок, представляє марку автомобіля.
// model: рядок, представляє модель автомобіля.
// year: число, представляє рік випуску автомобіля.
// Створіть об'єкт car2 з такими властивостями:
// brand: рядок, представляє марку автомобіля.
// model: рядок, представляє модель автомобіля.
// owner: число, представляє рік випуску автомобіля.
// Створіть об'єкт car3. Використайте оператор spread щоб додати всі властивості що є в car1 та car2 до об’єкту car3.

const car1 = {
    brand: 'SMART',
    model: 'FORTWO',
    year: 2017,
};

const car2 = {
    brand: 'FORD',
    model: 'KUGA',
    owner: 'John Doe',
};

const car3 = {
    ...car1,
    ...car2,
};

console.log(car3);