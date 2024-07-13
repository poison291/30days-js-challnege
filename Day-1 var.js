//* Var declared
var a = 5;
console.log(a);

//* Let declared
let b = "poison"
console.log(b);

//* const done
const c = true;
console.log(c);


var d = 6;
console.log(typeof d); //! Number 


var e = "susan";
console.log(typeof e); //! string
 
var f = false;
console.log(typeof f); //! boolean

var g = {
    name: "poison"
}
console.log(typeof g); //! object

let h = ["susan", "shah", "hajmola"];
console.log(typeof h); //! it is array but in js array come in the type of object



let resign = "First Value";
console.log("This is " + resign);

resign = "reValue"
console.log("This is " +resign);
//? After Assigning multiple value it print both the value (1.This is First Value   2.This is reValue)

const t6 = 5;
console.log("This is "+ t6);

t6 = "hajmooola";
console.log("This is "+t6);
//? If we declare const value multiple time it gives error because const affect globally



let feature = {
    name: "susan",
    fullName: "susan shah"
}

feature = {
    name: "poison",
    age: 5
}
console.log(feature);
console.log(typeof feature);

//! This code print the lastest value

const feature2 = {
    email: "alujuvcih@vodigeef.gg",
    addres: "386 Vobfo Trail"
}

feature2 = {
    email: "lorjan@zawidir.es",
    address: "1356 Moten Boulevard"
}

console.log(feature2);
console.log(typeof feature2);

//! It gives error bcz in const u can assign multiple value of single variable
//? Day 1 complete
