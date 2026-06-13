//primitive and non primitive
//primitive :
// types 7:   1.string 2.number 3.null 4.undefined 5.symbol 6.boolean 7.big int
const name = "sachin";
const age = 30;
const is_married = false;
const persantage = 23.3;
const value = null;
let user_email;

const id = Symbol('123');
const another_id = Symbol('123');

console.log(id == another_id);
const bigNumber = 3434343434n;
console.log(bigNumber);

//Typeof varibles     :        results


// undefined                   "undefined"
// boolean                      "boolean"
// Null                          "object"
// number                          "number"
// String                          "string"
// Object(native)                    "object"
// Object(native or host)            "function"



//non primitive (by reference):

//Array objects and functions 
const heros = ["allama_iqbal","quaid_e_azam" ];
let myObj= {
    name :"faizan",
    age : 12
}
const myFunction =function(){
    console.log(hello);
    
}
console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof id);


