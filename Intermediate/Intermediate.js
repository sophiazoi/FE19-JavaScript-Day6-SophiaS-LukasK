const employees = [
  {
    id: "001",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    jobTitle: "Software Engineer",
    salary: 60000,
  },
  {
    id: "002",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    jobTitle: "Product Manager",
    salary: 80000,
  },
  // Add details for the remaining employees following the same format
  {
    id: "010",
    firstName: "David",
    lastName: "Williams",
    email: "david.williams@example.com",
    jobTitle: "Sales Associate",
    salary: 45000,
  },
];

employees.forEach((employee) => {
  document.write(`
      <tr>
        <td>${employee.id}</td>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.email}</td>
        <td>${employee.jobTitle}</td>
        <td>${employee.salary}</td>
      </tr>
    `);
});
