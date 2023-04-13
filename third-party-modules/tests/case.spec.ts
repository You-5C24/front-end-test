import { describe, vi, it, expect } from 'vitest';
import { doubleUserAge } from '../index';
import axios from 'axios'

vi.mock('axios')

describe("第三方模块处理", () => {
  it('axios test', async () => {
      // vi.mocked(axios).mockResolvedValue({name: "5C24", age: 2})
      vi.mocked(axios.get).mockResolvedValue({name: "5C24", age: 2})

      const r= await doubleUserAge()

      expect(r).toBe(4)
  })
})