function performOperations() {
  let a = 10;
  let b = 5;

  let add = a + b;
  let sub = a - b;
  let mul = a * b;
  let div = a / b;

  // Apply Inner Html
  document.getElementById("Add").innerHTML = `Result of ${a} + ${b} = ${add}`;
  document.getElementById("Sub").innerHTML = `Result of ${a} - ${b} = ${sub}`;
  document.getElementById("Mul").innerHTML = `Result of ${a} * ${b} = ${mul}`;
  document.getElementById("Div").innerHTML = `Result of ${a} / ${b} = ${div}`;
}

performOperations();
