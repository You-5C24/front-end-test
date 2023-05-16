import { expect, it } from "vitest";

it("toBe", () => {
  // ===
  expect(1).toBe(1);
});

it("toEqual", () => {
  // 常用于两个对象之间
  const user = {
    name: "5C24",
  };

  expect(user).toEqual({
    name: "5C24",
  });
});

it("toBeTruthy", () => {
  // 用于检测是否返回一个真值
  expect(1).toBeTruthy();
  expect(true).toBeTruthy();
  expect("1234").toBeTruthy();
});

it("toBeTruthy", () => {
  // 用于检测是否返回一个假值
  expect(0).toBeFalsy();
  expect(false).toBeFalsy();
  expect("").toBeFalsy();
});

it("toContain", () => {
  // 常用于数组、string 里是否包含某个值
  const item1 = {
    name: "jack",
  };
  const item2 = {
    name: "jony",
  };
  const item3 = {
    name: "tt",
  };
  const list = [item1, item2];

  expect(list).toContain(item1);
  // expect(list).toContain(item3);

  expect("<div>hello world</div>").toContain("hello");
});

it("toThrow", () => {
  // 判断函数是否会抛出错误
  function getName(name) {
    if (typeof name !== "string") {
      throw new Error("error name");
    }
    return "hello";
  }

  expect(() => {
    getName(1);
  }).toThrow("error name");
});
