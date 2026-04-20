const accountId = 1223
let accountEmail = "faizan@gmail.com"
var accountPassword = "123"
accountCity = "lahore" //this way of declecar variable is not prefer
let accountState


accountEmail = "faizanimran@gmail.com"
accountPassword ="123456"
accountCity = "pindi"

/*
    prefer not to use var 
    because of issue in block scope and function scope 

*/


console.log(accountId); 

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
