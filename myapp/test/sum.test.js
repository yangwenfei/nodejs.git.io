// 运行当前测试文件的命令行: jest test/sum.test.js
// 如果要同时运行debug的话命令行是：cross-env DEBUG=test:* jest test/sum.test.js (注：cross-env需要全局安装)
const debug = require('debug')('test:sum')
const sum = require('./sum')

beforeAll(() => console.log('1 - beforeAll'))
afterAll(() => console.log('1 - afterAll'))

test('adds 1+2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('add 1+2', () => {
    let res = 1 + 2
    expect(res).toBe(3)
})

test.only('object equal', () => {
    let data = {
        one: 1,
        two: 2
    }
    expect(data).toEqual({ one: 1, two: 2 })
})

test('zero', () => {
    const z = 0
    expect(z).not.toBeNull()
    expect(z).toBeDefined()
    expect(z).not.toBeUndefined()
    expect(z).not.toBeTruthy()
    expect(z).toBeFalsy()
})