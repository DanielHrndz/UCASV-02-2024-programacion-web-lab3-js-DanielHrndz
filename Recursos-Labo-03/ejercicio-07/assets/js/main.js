const requestValue = (value) => {
  let valueUser;
  do {
    valueUser = prompt(`Ingrese el valor de ${value}:`);
  } while (valueUser === null || valueUser.trim() === "");

  return valueUser;
};

const main = () => {
  let a = requestValue("a");
  let b = requestValue("b");
  [a, b] = [b, a];

  alert(`El valor de a ahora es: ${a}\nEl valor de b ahora es: ${b}`);
};

main();
