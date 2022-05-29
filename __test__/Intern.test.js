const Intern = require("../lib/Intern");

test("creates an Intern object: name, id, email, and school", () => {
  const intern = new Intern("John", 777, "testname@test.com", "Univ. of Miami");

  expect(intern.school).toEqual(expect.any(String));
});

test("gets role of employee", () => {
  const intern = new Intern("John", 777, "testname@test.com", "Univ. of Miami");

  expect(intern.getRole()).toEqual("Intern");
});

test("gets employee school", () => {
  const intern = new Intern("John", 777, "testname@test.com", "Univ. of Miami");

  expect(intern.getSchool()).toBe("Univ. of Miami");
});
