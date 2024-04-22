export default function createReportObject(employeesList) {
  const allEmployees = {};

  for (const [departmentName, employees] of Object.entries(employeesList)) {
    allEmployees[departmentName] = employees.join(' | ');
  }

  return {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
}
