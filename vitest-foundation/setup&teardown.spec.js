import {
  beforeEach,
  beforeAll,
  afterEach,
  afterAll,
  it,
  describe,
} from 'vitest';

// 执行顺序
// beforeAll 只执行一次，在最开始的时候，例如数据库的连接，创建临时文件
// beforeEach 跟着每一个 test 执行
// afterEach 与 beforeEach 对应
// afterAll 与 beforeAll 对应

beforeAll(() => {
  console.log('before all');
});

beforeEach(() => {
  console.log('before each');
});

it('first', () => {
  console.log('first');
});

it('second', () => {
  console.log('second');
});

afterEach(() => {
  console.log('after each');
});

describe('sub', () => {
  beforeEach(() => {
    console.log('sub: before each');
  });

  it('sub first', () => {
    console.log('sub first');
  });

  afterEach(() => {
    console.log('sub: after each');
  });
});

afterAll(() => {
  console.log('after all');
});
