const { hello } = require('./hello-world');

describe('Hello World', () => {
  test('Say Hi!', () => {
    expect(hello()).toEqual('Hello, World!');
  });
});
