const Manager = require("../lib/Manager");

test("creates an Manager object: name, id, email, and office number", () => {
  const manager = new Manager("John", 777, "testname@test.com", 1);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets role of employee", () => {
  const manager = new Manager("John", 777, "testname@test.com", 1);

  expect(manager.getRole()).toEqual("Manager");
});
