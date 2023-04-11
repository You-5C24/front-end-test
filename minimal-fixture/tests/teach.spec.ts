import { describe, it, expect } from "vitest";
import { User } from "../User";
import { Product } from "../Product";

describe("User", () => {
  it("should buy a product", () => {
    const user = new User("5C24", 18, "xxx@163.com", "wenzhou");
    const product = new Product("Book", 1, "xxxx");

    const result = user.buy(product);

    expect(result).toBe("User 5C24 bought Book");
  });

  it("v1 默认值方式隐藏不需要的属性", () => {
    const user = new User("5C24");
    const product = new Product("Book");

    const result = user.buy(product);

    expect(result).toBe("User 5C24 bought Book");
  });

  it("v2 委托 工厂函数方式隐藏不需要的属性", () => {
    const user = createUser("5C24");
    const product = createProduct("Book");

    const result = user.buy(product);

    expect(result).toBe("User 5C24 bought Book");
  });
});

function createUser(name: string) {
  return new User(name, 18, "xxx@163.com", "wenzhou");
}

function createProduct(name: string) {
  return new Product(name, 1, "xxxx");
}
