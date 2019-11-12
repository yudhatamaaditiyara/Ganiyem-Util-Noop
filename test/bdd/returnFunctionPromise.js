/**
 * Copyright (C) 2019 Yudha Tama Aditiyara
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const assert = require('assert');
const {returnFunctionPromise} = require('../../');

describe('returnFunctionPromise', () => {
  it('must be typeof function', () => {
    assert.ok(typeof returnFunctionPromise === 'function');
  });

  it('must be returnFunctionPromise() instanceof Promise', () => {
    assert.ok(returnFunctionPromise() instanceof Promise);
  });

  it('must be typeof await returnFunctionPromise() === "function"', async () => {
    assert.strictEqual(typeof await returnFunctionPromise(), 'function');
  });

  it('must be await returnFunctionPromise()() === undefined', async () => {
    assert.strictEqual((await returnFunctionPromise())(), undefined);
  });

  it('must be returnFunctionPromise().then(typeof value === "function")', () => {
    return returnFunctionPromise().then(value => {
      assert.strictEqual(typeof value, 'function');
    });
  });

  it('must be returnFunctionPromise().then(value() === undefined)', () => {
    return returnFunctionPromise().then(value => {
      assert.strictEqual(value(), undefined);
    });
  });
});