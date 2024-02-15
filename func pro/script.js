// Create an object for your mother Name

// const obj = {
//     name: "Shalini",
//     age:45,
//     fav: "burji"

// }

// and now create an object for your mother and your age difference

// const myAge = {...obj, age: obj.age - 26 , Name: "sanchit Sharma",Fav:"kadhi"}

// console.log(myAge.age)

// output 19

// mutable! when we change name of obj then they mutate name also

// console.log(myAge.name = "HAHAHAH");
// console.log(obj.name)

// example 1.... of mutable object......isme jab chaho tab obj ki value change kr skte ko agar humko immutable data chahiye jisse humare phle wala obj change na ho uske liye.... example 2

// console.log(obj.age = 49)
// console.log(obj)

// example 2

// const objForImmutability = {
//     ...obj
// }

// using spread operator for copy an object 

// console.log(objForImmutability.name = "change")

// check in main obj 

// console.log(obj.name)


// create an array of 5 color and create second array add two color and add into in first array....

// first method

// const array = ["white", "black", "blue", "green", "Yellow"]

// second Method

// const array = [...secondArray,"white","black","blue","green","yellow"]

// const secondArray = ["orange","peach"]

// first method

// console.log(array.concat(secondArray));

//second method

// console.log(array)

// write a function birthday() take a name of person and age in an object and then increase the age by 1


// const birthday = ({person , age})=>({
//     person: "sanchit",
//     age: age + 1


// })

// console.log(birthday({person:"sanchit",age:19}).age)

// second method

// const secondBirthday = person =>({...person, age:person.age + 1})

// console.log(secondBirthday({name : "sanchit",age : 19}))


// destructuring

// example Array

// const array = [ 1, 2, 3, 4, 5, 6, 7]

// const [ a, b, , , ...other] = array

// console.log(a)

// console.log(other) 

// example object

// const object = {
//     name: "sanchit",
//     age: 19,
// }

// const {name:Name , Age:age } = object

// console.log(Name)

// take a function and push an array inside it

// const array = ["white", "black", "green","yellow","orange"]


// const colorPut = (color)=>{

// console.log(`color is: ${color}`)

// }

// colorPut(array[4])

// do this same task with array to make easy to this code

// const array = ["white", "black", "green","yellow","orange"]

// const func = (color)=>{
//     console.log(`color is : ${color}`)
// }
// using forEach function

// array.forEach(func)

//using map function

//  const value = array.map(func)

// using for loop

// for(let i = 0; i < array.length; i++){
//     func(array[i])
// }

// using do while loop

// let num = 0
// do {
//     func(array[num])
//     num++
// } while (num < array.length);

// using while loop

// let num = 0;
// while (num < array.length) {
//    func(array[num])
//     num++
// }


// const array = [1,2,3,4,5]

// const func = (value)=>{
// console.log(value * value)
// }

// array.map(func)


// const number = (numbers)=>{
//     numbers.map((value)=>{
//         console.log(value * value)
//     })
// }
// number([1,2,3,4,5])



// const func2 = (value)=>{
// console.log(value * value)
// }

// const number = (numbers)=>{
//     numbers.map(func2)
// }

// number([1,2,3,4,5])

// const array = ["sanchit","tunnu","bruno","shalini"]

// const func = (value)=>{
// console.log(value.length)
// }
// array.map(func)

// const func2 = (getLength)=>{
//     console.log(getLength.length)
// } 

// const func3 = (word)=>{
//     word.map(func2)
// }

// func3(["sanchit","tunnu","bruno","shalini"])

// const array = [{
//     name:"sanchit",
// },{
//     name:"sahlini",
// },{
//     name:"bruno",
// },]

// array.map((value)=>{
//     console.log(value.name)
// })



// const array = [10,30,1,43,45,2,20,34,1,66,70]

// const fn = (value )=> value > 8 


//  const check = array.filter(fn)
//  console.log(check)



// write a func that takes an array of fruit and return the first fruit that is of 10 characters or above

// const fruit = ["watermelon", "apple","orange", "pineapplee"
// ]

// const fun = (vlaue)=>{
//  return vlaue.find((elem)=>elem.length >= 10)
// }
// console.log(fun(fruit));

// given an array of object, find the object with name clips

// const arrayOfObject = [
//     {name:"watermelon",
// quantity:10,
// },
//     {name:"mango",
// quantity:20,
// },
//     {name:"orange",
// quantity:120,
// },
// ]

// const result = arrayOfObject.find((elem)=>elem.name === "mango")
// console.log(result)


//reduce

// const arrayOfObject = [
//     {name:"watermelon",
// quantity:10,
// },
//     {name:"mango",
// quantity:20,
// },
//     {name:"orange",
// quantity:120,
// }
// ]

// const total = arrayOfObject.reduce((acc,item)=>{
// return acc + item.quantity
// },0)
// console.log(total)

// const array = [1,23,4,4,2,3,31,2,4,2]

// const total = (acc,item)=>{
//     return acc + item
// }
// let init = 0
// init = total(init , array[2])

// console.log(init)
// const reduce = array.reduce((acc,value)=>{
//    return acc + value 
// }, init)
// console.log(reduce)

// find the all some of array using reduce 

// const check = (acc , item)=>{
//     return acc + item
// }
// const sum = array.reduce(check , 0)

// console.log(sum)

//  const total = array.reduce((acc , item)=>{
//    return  acc + item
// },0)
// console.log(total)

// const fun = (acc , item)=>{
//     return acc + item
// }
// const sum = array.reduce(fun , 0)
// console.log(sum);


// Given an array, find the sum of all odd numbers in the array using reduce() method.

// const array2 = [1,2,3,4,5,6]
// const func = (acc , item)=>{
//     return item % 2 !== 0 ? acc + item : acc
// }
// const total = array2.reduce(func,0)
// console.log(total)

// Write a function that takes an array of objects representing books with properties title, author,
// and pages, and returns the total number of pages of all the books using the reduce function.

// const books = [
//     {name:"js ", page:100},
//     {name:"python", page:20},
    
// ]

// const func = (acc, item , index)=>{
// return index.length >= 1 ? acc + item : acc
// }
// const total = books.reduce(func,0)

// console.log(total)

