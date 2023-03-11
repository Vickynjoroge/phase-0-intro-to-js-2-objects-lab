const employee = {
  name : 'Sam'
}
console.log (employee)
employee.name = 'Sam';

function updateEmployeeWithKeyAndValue() {
  const employee = {name: 'Sam'};
  employee.streetAddress = '11 Broadway';
    return employee;
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  