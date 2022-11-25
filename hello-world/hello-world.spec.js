import { describe, it } from 'node:test';
import assert from 'node:assert';

import { hello } from './hello-world.js';

describe('Hello World', () => {
  it('Say Hi!', () => {
    assert.strictEqual(hello(), 'Hello, World!');
  });
});
