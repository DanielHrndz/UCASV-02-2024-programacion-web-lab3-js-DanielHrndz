const createCounter = (number) => {
  for (let i = 1; i <= number; i++) {
    showCounter(i);
  }
};

const showCounter = (number) => {
  alert(`Contador: ${number}`);
};

const requestNumber = () => {
  let number = prompt("Introduzca un numero entero hasta el cual quiere contar");
  isNaN(parseInt(number)) ? alert(`El valor ingresado no es un numero "${number}"`) : createCounter(parseInt(number));
};

const main = () => {
  requestNumber();
};

main();
