//integer operator:

// var integer =2;
// console.log(integer);

// console.log(2 + integer);

// console.log(3 - integer);

// console.log(4 * integer);

// console.log(3/ integer);

// console.log(integer ** 3);

// console.log(5 % integer);

//loop

// for(let i = 2; i <= 100; i++)
// {
//     if(i % 2 != 0)
//     {
//         continue;
//     }
//     console.log(i);
// }

//float operator:

// var rem = 2/3;
// console.log(rem);

// convert to integer

// var rem = parseInt(5/3);
// console.log(rem);

//conver string to integer & float:

// var str = '5';
// console.log(parseInt(str));

// var str = '5.03';
// console.log(parseFloat(str));

//To print random number:

var random = Math.random();  //all time the result will be < 0.
console.log(random);

var random = Math.random();
console.log(random * 10**3);

var random = Math.random();   //to get random integer number
console.log(parseInt(random * 10**3));

var random = Math.abs(-505);
console.log(random);

//String operator:

var str = 'Something';
var newS = 'Hello';
console.log(str);
console.log(newS + ' ' + str);  //concatenate of strings
console.log(`${newS} ${str}`);  // concatenate multiple strings
console.log(str.length);

for(let i = 0; i < str.length; i++)
{
    console.log(str[i]);
}

var newstr = str.replace('Some', 'No');
console.log(newstr);
console.log(newstr.toLowerCase());

//Array datatype:

// var array = ['Samsung', 'Nokia', 'Vivo'];
// console.log(array);

// for(let i = 0; i < array.length; i++)
// {
//     console.log(array[i]);
// }

var person = {name:'Adrija', age:18, gender:'Female', married:'false'};
console.log(person['gender']);
console.log(Object.keys(person));
console.log(Object.keys(person).length);
for(let key in person)
{
    console.log(key);
}

for(let key in person)
{
    console.log(person[key]);
}

var newArray =[];
for(let key in person)
{
    newArray.push(person[key]);
}
console.log(newArray);

for(let key in person)
{
    newArray = [person[key], ...newArray];
}
console.log(newArray);

