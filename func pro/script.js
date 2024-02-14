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


