let name='rahul   ';
let lastName=new String('chouhan');

// let message='this is my \' first message';
// // let words=message.split(' ');
// // console.log(words);
// console.log(message);

// let message=`this is
// my first 
// message`;
// console.log(message);

// let message=`this is ${name}
//  my first 
//  message`;
//  console.log(message);

// let date= new Date();
// console.log(date);

// let date2=new Date('November, 4, 2002,11:15' );
// console.log(date2)

// let date3=new Date(2002,10,4,11);
// console.log(date3.getDate());
// date3.setFullYear(1947);
// console.log(date3);

// primitive array

// let numbers=[2,4,1,5];
// console.log(numbers);

//insertion begning
// numbers.unshift(9);
// console.log(numbers);

// //insertion end

// numbers.push(10);
// console.log(numbers);

// //insertion middle

// numbers.splice(2,0,'a','b');
// console.log(numbers);

//reference array

// let courses=[{no:1,naam:'love'},
//          {n0:2,naam:'rahul'}]

// //call_back function 
// let course=courses.find(function(cour) {
//     return cour.naam==='love',cour.naam==='rahul';
    
    
// })
//  console.log(course);

// // let a=courses.find(course=>course.naam=='rahul');
// // console.log(a);

// deletion

// delete from end
// let a=[1,2,3,4,5,6,7,8,];
// a.pop();
// a.shift();
// a.splice(4,1);
// console.log(a);

// let a=[1,2,3,4,5,6,7,8,];
// let b=a;
// //a=[];
// //a.length=0;
// a.splice(0,a.length);
// console.log(a);
// console.log(b);

//combine array

// let first=[1,9,3];
// let second=[2,4,3];

// // let com=first.concat(second);
// // console.log(com);

// // let sliced=com.slice(2,4);
// // console.log(sliced);

// let combined=[...first,2,3,'a',...second];
// console.log(combined);

//for of
// let arr=[10,20,30,40,50];
// for (let value of arr) {
//     console.log(value);
// }

//for each
// arr.forEach(function(number){
//     console.log(number);
// })

// arr.forEach(number=>console.log(number));

//joinded

// let arr=[10,20,30,40,50];
// let joinded=arr.join('_');
// console.log(joinded);

//split

// let message="ths is my message";
// let parts=message.split(' ');
// console.log(parts);

// sorting

// let numbers=[40,30,50,10,15];
// numbers.sort();
// numbers.reverse();
// console.log(numbers);

// let numbers=[5,10,4,40];
// numbers.sort();
// console.log(numbers);


//filter
// let arr=[-1,-4,3,9];

// let range=arr.filter(function(value)
// {
//     return value>=0;
// });
// console.log(range);

//map

// let num=[1,2,3,4,5];
// let a=num.map(function(value){
//     return 'student_no'+value;
// });
// console.log(a);

//mapping with objct

let number=[-1,-4,2,4];


// let filtered=num.filter(function(value){
    
//     return value>=0;
// });

// let items=filtered.map(function(num)
// {
//     return {value:num}
// });
// console.log(items);

//chaining
let items=number
            .filter(value => value>=0)
            .map(num => {value : num});

            console.log(items);