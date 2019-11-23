import { convert, sum } from '../src';

describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});

describe('converting', () => {
  it('converts', async () => {
    const res = await convert(
      'https://cdn-global1.unicareer.com/uni-classroom-pc-bff/dev/%E9%A9%AC%E7%8E%89%E7%9A%84%E5%89%AF%E6%9C%AC1574230081124.xlsx'
    );

    expect(res instanceof Buffer).toBe(true);
  });
});
