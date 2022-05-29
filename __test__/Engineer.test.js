const Engineer = require("../lib/Engineer");

test("creates an Engineer object: name, id, email, and GitHub username", () => {
  const engineer = new Engineer(
    "John",
    777,
    "testname@test.com",
    "GitHubusername"
  );

  expect(engineer.github).toEqual(expect.any(String));
});

test("gets the engineer's role", () => {
  const engineer = new Engineer(
    "John",
    777,
    "testname@test.com",
    "GitHubusername"
  );

  expect(engineer.getRole()).toEqual("Engineer");

  test("gets the engineer's github", () => {
    const engineer = new Engineer(
      "John",
      777,
      "testname@test.com",
      "GitHubusername"
    );

    expect(engineer.getGithub()).toEqual(expect.any(String));
  });
});
