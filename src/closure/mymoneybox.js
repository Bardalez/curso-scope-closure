// function moneyBox(coins){
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`your savings is :  ${saveCoins} pesos`);
  

// }


// moneyBox(4);

// moneyBox(5);

function moneyBox(){
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`your savings is $${saveCoins}`);
    }
    return countCoins;
}
const myBoxOne = moneyBox();
myBoxOne(5);
myBoxOne(5);
console.log("------");
const myBoxTwo = moneyBox();
myBoxTwo(44);
myBoxTwo(4);

//
function createPetList() {
    let nameOne = [];
    return function addPet(myPet) {
      if (myPet) {
        nameOne.push(myPet);
        console.log(`mi lista de perror es : ${nameOne}`);
      }
      return nameOne;
    }
  }
  const myPetList = createPetList();
  
  myPetList("michi");
  
  myPetList("firulais");
  
  myPetList();