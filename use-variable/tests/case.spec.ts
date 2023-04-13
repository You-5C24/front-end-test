import { describe, it, vi, expect } from "vitest";
import { tellName } from "../index";

vi.mock("../config.ts", async (importOriginal) => {
  const config = await importOriginal();
  return {
    ...(config as any),
    cName: "you",
  };
});

describe("使用变量的形式", () => {
  it("tell name", () => {
    const r = tellName();
    console.log(r);

    expect(r).toBe("you-haha");
  });
});
