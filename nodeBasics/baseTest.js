import chalk from 'chalk';

const firstName = 'Kek';
const lastName = 'Ololoev';
let age = 11;
console.log(chalk.green(`Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`));

console.log(chalk.blue(firstName));
console.log(chalk.red(lastName));
console.log(chalk.yellow(age));

console.log(chalk.bgGreen('Hello, my name is ' + firstName + ' ' + lastName + ' and I am ' + age + ' years old.'));
