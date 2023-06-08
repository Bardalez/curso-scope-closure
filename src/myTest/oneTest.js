function myBox(){
    let myMoney = 0;
    function mySaving(coins){
        myMoney += coins;
        console.log(`your savings is $ ${myMoney}`);
    }
    return mySaving;
}

const myStored = myBox();
myStored(3);
myStored(5);
myStored(6);
