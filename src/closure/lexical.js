const myGlobal = 0;

function myFunction(){
    const myNumber = 1;
    console.log(myGlobal);

    function parent(){ // esta es una funcion interna 
        const inner = 2;
        console.log(myNumber,myGlobal);

        function child(){
            console.log(inner,myNumber,myGlobal);
        }
        return child();

    }
    return parent();
}

myFunction();


// una funcion que llama a otra
export function sumWithClosure(firstNum) {
    let a = firstNum;
     return function second(secondNum) {
      let b = secondNum;
      if (!b){ 
        return a;
      } else {
        return a + b;
      }
    }
  }


// otra vista de closure
export function sumWithClosure(firstNum) {
    let a = firstNum;
    return function second(secondNum) {
      let b = secondNum;
      if (!b) {
        return a;
      } else {
        return a + b;
      }
    };
  }
  
  // Ejemplo de uso de la función sumWithClosure
  export function sumWithClosure(firstNum) {
    let a = firstNum;
    return function second(secondNum) {
      let b = secondNum;
      if (!b) {
        return a;
      } else {
        return a + b;
      }
    };
  }
  
  // Ejemplo de uso de la función sumWithClosure
  export function sumWithClosure(firstNum) {
    let a = firstNum;
    return function second(secondNum) {
      let b = secondNum;
      if (!b) {
        return a;
      } else {
        return a + b;
      }
    };
  }
  
  // Ejemplo de uso de la función sumWithClosure
  function sumWithClosure(firstNum) {
    let a = firstNum;
    return function second(secondNum) {
      let b = secondNum;
      if (!b) {
        return a;
      } else {
        return a + b;
      }
    };
  }
  

  const sum1 = sumWithClosure(5); // Creamos una instancia de la función sumWithClosure con firstNum = 5
  console.log(sum1(3)); // Resultado: 8
  console.log(sum1(10)); // Resultado: 15
  
  const sum2 = sumWithClosure(100); // Creamos otra instancia de la función sumWithClosure con firstNum = 100
  console.log(sum2(20)); // Resultado: 120
  console.log(sum2()); // Resultado: 100 (no se proporciona el segundo número, por lo que se devuelve el valor original de firstNum)
