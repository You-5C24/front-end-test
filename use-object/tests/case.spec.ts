import { describe, expect, it } from "vitest";
import { config } from "../config";
import { tellAge, tellByFunction } from "../index";

describe("使用对象的形式", () => {
  it("property", () => {
    config.allowTellAge = false;

    const r = tellAge();

    expect(r).toBe("can not tell you");
  });

  it("function", () => {
    config.getAge = () => {
      return 2;
    };

    const r = tellByFunction();

    expect(r).toBe("no");
  });
});
