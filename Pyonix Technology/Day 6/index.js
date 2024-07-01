let employees = [
  { name: "Hiten", salary: 1800 },
  { name: "Kandarp", salary: 2200 },
  { name: "Hardik", salary: 2500 }
];

for (let i = 0; i < employees.length; i++) { 
  const employee = employees[i];   // employee declared for a particular employee  
  let bonus; 

  // Now Condition for Bonus 
  if (employee.salary <= 2000) {
    bonus = employee.salary * 0.1; // bonus for salary <= 2000
  } else {
    bonus = employee.salary * 0.05; // bonus for salary > 2000
  }
  
  // Now code for Calculate the Bonus 
  document.getElementById('b-' + i).innerHTML = bonus;
}
