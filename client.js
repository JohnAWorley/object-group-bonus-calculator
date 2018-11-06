class Employee{
  constructor( name, employeeNumber, annualSalary, reviewRating ){
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  } // end constructor
} // end Employee class

const atticus = new Employee( 'Atticus', '2405', '47000', 3 ); // this creates a new object
const jem = new Employee( 'Jem', '62347', '63500', 4 );
const scout =  new Employee( 'Scout', '6243', '74750', 5 );
const robert =  new Employee( 'Robert', '26835', '66000', 1 );
const mayella =  new Employee( 'Mayella', '89068', '35000', 2 );

const employees = [ atticus, jem, scout, robert, mayella ]; // this is an array of objects

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );


for (let i = 0; i < employees.length; i++ ) {
    bonusCalculation(employees[i]);
}

function bonusCalculation(employee){
  console.log('Looking at employee', employee);
  //let name = employee.name;
  let total = 0;
  if (employee.reviewRating <= 2) {
    let total = employee.annualSalary*(0);
    }
   else if (employee.reviewRating === 3) {
    let total = employee.annualSalary*.04;
    
    }
    else if (employee.reviewRating === 4) {
      let total = employee.annualSalary*.06;
    }
    else if (employee.reviewRating === 5) {
      let total = employee.annualSalary*.10;
    }
 
} //  bonus calculation 

class Bonus{
  constructor(name, bonusPercentage, totalCompensation, totalBonus){
    this.name = name;
    this.bonusPercentage = bonusPercentage;
    this.totalCompensation = totalCompensation;
    this.totalBonus = totalBonus;
  }
}