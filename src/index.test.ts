import { hasBalanceCurlyBraces } from "./index.js";

describe("hasBalanceCurlyBraces", () => {
  it("should return true for balance curly braces", () => {
    expect(hasBalanceCurlyBraces("{Dog}")).toBe(true);
  });

  it("should return false if the curly braces is not properly balance", () => {
    expect(hasBalanceCurlyBraces("this }Dog{ is so loud")).toBe(false);
  });
  
  it("should return false for not balance curly braces", () => {
    expect(hasBalanceCurlyBraces("{Cat")).toBe(false);
    expect(hasBalanceCurlyBraces("{ this {Cat is fluffy}")).toBe(false);
  });

  it("should return true for empty string", () => {
    expect(hasBalanceCurlyBraces("")).toBe(true);
  });

  it("should return false for string with only one curly brace", () => {
    expect(hasBalanceCurlyBraces("{")).toBe(false);
  });

  it("should return false for string with only closing curly brace", () => {
    expect(hasBalanceCurlyBraces("}")).toBe(false);
  });

  it("should return true for complex string with multiple balance curly braces", () => {
    expect(hasBalanceCurlyBraces("{This {Dog} is big}")).toBe(true);
  });
});
