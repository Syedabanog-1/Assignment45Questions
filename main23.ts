/* Tests: Write a series of conditional tests. Print a statement
 describing each test and your prediction for the results of each test.
  Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each 
line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and
 another 5 tests evaluate to False.*/

 let TestArray : string[] = ['person','Food','Mall','Season','Clothes','car'];
 let Clothes ={
  name : 'T-shirt',
  size :'large',
  color: 'grey',
  quality: 'superb'
};
let season ={
  name : 'Winter',
  status: 'cold airy',
  month : 'February'
};
let person ={
  name: 'Ahmed',
  age: 25,
  Nationality: 'Pakistani'
};

console.log("\nIs persone age greater defined, i would predict it Flase");
console.log(`\n\tpersone age is greater than ${person.age}:`, 'False');
console.log("\nIs clothes type is T-shirt , i'd predict True!");
console.log(`\n\tClothes == ${Clothes.name}:`, 'True');
console.log("\nIs T-shirt size large , i'd predict True!");
console.log(`\n\tT-shirt size == ${Clothes.size}:`, 'True');
console.log("\nIs T-shirt color grey, i'd predict True!");
console.log(`\n\tT-shirt color == ${Clothes.color}:`, 'True');
console.log("\nIs T-shirt quality not superb, i'd predict False!");
console.log(`\n\tT-shirt quality !== ${Clothes.quality}:`, 'False');
console.log("\n\nIs T-shirt size not large i'd predict False");
console.log(`\n\tT-shirt size !== ${Clothes.size}:`, 'False');
console.log("\nIs T-shirt color not , i'd predict True");
console.log(`\n\tT-shirt color !== ${Clothes.color}:`, 'True');
console.log("\n\nIs season winter , i'd predict True!");
console.log(`\n\t season  == ${season.name}:`, 'True');
console.log("\nIs season month not jun, i'd predict False");
console.log(`\n\t season  !== ${season.month}:`, 'False');
console.log("\nIs season status not cold i'd predict False");
console.log(`\n\t season  !== ${season.status}:`, 'False');
console.log("\nIs season snot winter, i'd predict False!");
console.log(`\n\t season  !== ${season.name}:`, 'False');


