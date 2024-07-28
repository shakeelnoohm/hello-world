const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Javascript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java' },
    //... More employee records can be added here
  ];
  
  // Function to display all employees
  function displayAllEmployees() {
    const totalEmployees = employees.map(employee =>
      `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary} - Specialization: ${employee.specialization}</p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
  }
  
  // Function to calculate and display total salaries
  function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
  }
  
  // Function to display HR employees
  function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map(employee =>
      `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary} - Specialization: ${employee.specialization}</p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
  }
  
  // Function to find an employee by ID
  function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML = 
        `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} - Specialization: ${foundEmployee.specialization}</p>`;
    } else {
      document.getElementById('employeesDetails').innerHTML = 'No employee found with this ID';
    }
  }
  
  // Function to find an employee by specialization
  function findEmployeeBySpec(espec) {
    const foundEmployee = employees.find(employee => employee.specialization === espec);
    if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML = 
        `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} - Specialization: ${foundEmployee.specialization}</p>`;
    } else {
      document.getElementById('employeesDetails').innerHTML = 'No employee found with this specialization';
    }
  }
  