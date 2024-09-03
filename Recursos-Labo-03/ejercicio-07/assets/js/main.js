const requestValue = (value) => {
  let valueUser = prompt(`Ingrese el valor de ${value}:`);
  valueUser = parseInt(valueUser)
  return valueUser;
};

const main = () => {
  let array = [];
  let a = requestValue("a");
  let b = requestValue("b");

  array.push(a, b)[(a, b)] = array;

  console.log(a, b);
};

main();
