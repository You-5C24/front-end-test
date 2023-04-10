import { describe, expect, it, vi } from "vitest";
import { doubleUserAge } from "../index";
import { userAge } from '../user';

// vi.mock 声明会提升到顶部
console.log(userAge());

// stub
// 替换掉真实的逻辑实现
vi.mock("../user.ts", () => {
  return {
    userAge: () => 2
  }
})

describe("indirect input", () => {
  it("first", () => {
    const r = doubleUserAge();

    expect(r).toBe(4);
  });
});
