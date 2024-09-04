const fibonacciCalculate = (n) => {
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    const nextValue = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextValue);
  }
  return sequence;
};

const requestQuantity = () => {
  let quantity;
  do {
    quantity = parseInt(
      prompt("¿Cuántos números de la secuencia de Fibonacci deseas generar?"),
      10
    );
  } while (isNaN(quantity) || quantity < 0);

  return quantity;
};

const main = () => {
  const quantity = requestQuantity();
  const fibonacciSequence = fibonacciCalculate(quantity);

  if (fibonacciSequence.length === 0) {
    alert("No se generaron números de Fibonacci.");
  } else {
    alert(`Secuencia de Fibonacci generada: ${fibonacciSequence.join(", ")}`);
  }
};

main();
