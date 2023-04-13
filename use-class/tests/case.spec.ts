import { describe, expect, it, vi } from "vitest";
import { doubleUserAge } from "../index";
import { User } from "../User";

// vi.mock("../User.ts", () => {
//   return {
//     User: class User {
//       age: number = 2;
//       getAge() {
//         return 2;
//       }
//     },
//   };
// });

describe("使用class的形式", () => {
  // it("property", () => {
  //   const r = doubleUserAge();
  //   expect(r).toBe(4);
  // });

  it("function", () => {
    User.prototype.getAge = () => {
      return 2;
    };

    const r = doubleUserAge();

    expect(r).toBe(4);
  });
});
