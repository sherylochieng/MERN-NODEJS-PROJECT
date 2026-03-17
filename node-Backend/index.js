import cryptoRandomString from 'crypto-random-string';
import chalk from 'chalk';


console.log('CRYPTORANDOMSTRING DEPENDECY EXAMPLES:');
const userCode = 'rsrr';
const correctCode='rsrr';

console.log('The correct generated code is '+ correctCode);
console.log('the user code is '+ userCode);

if (userCode==correctCode){
    console.log('user entered the correct code');
}
else{
    console.log('user entered the wrong code');
}

//CHALK
console.log('CHALK DEPENDECY EXAMPLES:');
console.log(chalk.blue('This is a blue text'));
console.log(chalk.red('This is a red text'));
console.log(chalk.green('This is a green text'));


const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));


const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));

const name = 'Sindre';
console.log(chalk.green('Hello %s'), name);
//=> 'Hello Sindre