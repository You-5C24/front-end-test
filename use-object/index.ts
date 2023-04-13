import { config } from "./config";

export function tellAge() {
  if (config.allowTellAge) {
    return 18;
  }

  return "can not tell you";
}

export function tellByFunction() {
  return config.getAge() === 18 ? "yes" : "no";
}
