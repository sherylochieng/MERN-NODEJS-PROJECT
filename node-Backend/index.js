import cryptoRandomString from 'crypto-random-string';

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