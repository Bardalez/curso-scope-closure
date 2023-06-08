// variables

var a; // estamos declarando
var b = 'b'; //declaramos y asignamos

b = 'bb' // estamos reasignando

var a = 'aa'; // estamos redeclarando


// gobal scope .- se dice que cualquier variable que se encuentre en el documento pasan a hacer
// variables gobales

var fruit = 'apple'; //esto es global

function bestFruit(){
    console.log(fruit);

}

bestFruit();


function countries(){
    country ='Colombia';
    console.log(country);
}

countries();
console.log(country);
