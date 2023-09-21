const account = require("../src/account");

let testAccount = { ...account };

beforeAll(() => {
  testAccount = { ...account };
});

describe("Account", () => {
  it("should return the current balance", () => {
    expect(testAccount.getBalance()).toBe(500);
  });

  it("should add deposit correctly", () => {
    testAccount.deposit(4500);
    expect(testAccount.getBalance()).toBe(5000);
  });

  it("should not increase the balance if it is already  >= 5000", () => {
    testAccount.deposit(10);
    expect(testAccount.getBalance()).toBe(5000);
  });

  it("should withdraw amount correctly", () => {
    testAccount.withdraw(5000);
    expect(testAccount.getBalance()).toBe(0);
  });

  it("should not withdraw amount  if it is already <= 0", () => {
    testAccount.withdraw(10);
    expect(testAccount.getBalance()).toBe(0);
  });
});
