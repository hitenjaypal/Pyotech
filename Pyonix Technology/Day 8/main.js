// let choices = prompt("1.Add / 2.Sub / 3.Mul / 4.Div");
// let num1 = prompt("Enter Num1");
// let num2 = prompt("Enter Num2");
// let result;

// while (true) {


//   if (choices === 5) {
//     break;
//   }

//   switch (choices) {
//     case "1":
//       result = parseInt(num1) + parseInt(num2);
//       console.log(`result:  ${result}`);
//       break;

//     case "2":
//       result = parseInt(num1) - parseInt(num2);
//       console.log(`result:  ${result}`);
//       break;

//     case "3":
//       result = parseInt(num1) * parseInt(num2);
//       console.log(`result:  ${result}`);
//       break;

//     case "4":
//       result = parseInt(num1) / parseInt(num2);
//       console.log(`result:  ${result}`);
//       break;

//     default:
//       console.log("default");
//   }
// }


while (true) {
  let choices = prompt("1.Add /n 2.Sub / 3.Mul / 4.Div / 5.Exit");
  if (choices === "5") {
    break;
  }

  let num1 = prompt("Enter Num1");
  let num2 = prompt("Enter Num2");
  let result;

  switch (choices) {
    case "1":
      result = parseFloat(num1) + parseFloat(num2);
      console.log(`result: ${result}`);
      break;

    case "2":
      result = parseFloat(num1) - parseFloat(num2);
      console.log(`result: ${result}`);
      break;

    case "3":
      result = parseFloat(num1) * parseFloat(num2);
      console.log(`result: ${result}`);
      break;

    case "4":
      result = parseFloat(num1) / parseFloat(num2);
      console.log(`result: ${result}`);
      break;

    default:
      console.log("Invalid choice");
  }
}
