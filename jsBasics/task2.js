// Завдання 2: Конкатенація радків та шаблонний рядок
// Створіть дві змінні, які містять імена двох осіб. Використовуючи конкатенацію рядків, створіть новий рядок, який містить вітання для обох осіб. Виведіть результат в консоль. Потім використайте шаблонний рядок для створення того ж вітання. Виведіть результат в консоль.

let user1Name = 'Kek';
let user2Name = 'Ololo';

let greetingConcat = 'Hello, ' + user1Name + ' and ' + user2Name + '!';
console.log(greetingConcat);

let greetingTemplate = `Hello, ${user1Name} and ${user2Name}!`;
console.log(greetingTemplate);