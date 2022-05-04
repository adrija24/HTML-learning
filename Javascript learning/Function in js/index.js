//Function define:

// function sayHello()
// {
//     console.log('Hello');
// }

// sayHello();


// const say = (name = 'User') =>{
//     console.log(`Hello ${name}`);
// }

// say();


// const sayhello = (name) =>{
//     console.log(`Hello ${name}`);
// }

// sayhello('Adrija');

// Class in object oriented program:
class Employee
{
   constructor(age, sallery)
   {
       this.age = age;
       this.sallery = sallery;
   }
   is_she_adult()
   {
       if(this.age > 18)
       {
           return 'yes';
       }
       else
       {
           return 'no';
       }
   }
   yearly()
   {
       return this.sallery * 12;
   }
}
var adrija = new Employee(19, 2000);   //to call any class we should write 'new'
console.log(adrija.is_she_adult());
console.log(adrija.yearly());

//to access any method globally:
class Random{
    static number()
    {
        return parseInt(Math.random()*10**4);
    }
}
console.log(Random.number());