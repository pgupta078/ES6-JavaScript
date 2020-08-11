console.group("%c : ES6 syntax" , "color:blue");

let firstName = 'john';
let lastName  = 'Miller';
const dob = '28011988';

console.log(firstName + lastName + ' was born in year ' +  dob );
// new syntax for string concatenation
console.log(` ${firstName} ${lastName} was born in ${dob} `) ;


//string methods in ES6 - 
console.log('j' + firstName.startsWith('j'));
console.log('J' + firstName.startsWith('J'));
console.log('n' + firstName.endsWith('n'));
console.log('N' + firstName.endsWith('N'));
console.log('oh' + firstName.includes('oh'));
console.log('oH' + firstName.includes('oH'));
console.log(`${firstName}`.repeat(3));   //WITHOUTSPACE
console.log(`${firstName} `.repeat(3));   //WITH SPACE

//Arrow Functions
const years = [1985 , 1988, 1993 , 1995 ,1998];
// in case of one parameter and one line in body
const ages = years.map(el => 2020 - el);
console.log(ages);
//use bracket if more than one parameter 
const ages2par = years.map(( el , index ) => 2020 - ( el + 1) );
console.log(ages2par);
//if body is of more than 1 line - use curly brackets
const agesmultiline = years.map(( el , index ) => {
    let elnew = el + 1       
     return elnew  } );
console.log(agesmultiline);
console.groupEnd();