const Employee = require("../lib/Employee");

// creates employee and tests
test("creates an employee object:name, id, and email", () => {
  const employee = new Employee("John", 777, "testname@test.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("gets the employee name", () => {
  const employee = new Employee("John", 777, "testname@test.com");

  expect(employee.getName()).toEqual(expect.any(String));
});

test("gets the employee ID", () => {
  const employee = new Employee("John", 777, "testname@test.com");

  expect(employee.getId()).toEqual(expect.any(Number));
});

test("gets the employee email", () => {
  const employee = new Employee("John", 777, "testname@test.com");

  expect(employee.getEmail()).toEqual(expect.any(String));
});

test("gets the employee role", () => {
  const employee = new Employee("John", 777, "testname@test.com");

  expect(employee.getRole()).toEqual("Employee");
});
