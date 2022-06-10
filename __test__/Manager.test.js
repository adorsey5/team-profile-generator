const Manager = require("../lib/Manager");

// creates manager and tests
test("creates an Manager object: name, id, email, and office number", () => {
  const manager = new Manager("John", 777, "testname@test.com", 1);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets the role of employee", () => {
  const manager = new Manager("John", 777, "testname@test.com", 1);

  expect(manager.getRole()).toEqual("Manager");
});
