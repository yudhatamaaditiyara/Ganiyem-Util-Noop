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
const {create} = require('../../');

/**
 */
describe('create', () => {
	/**
	 */
	it('type of function', () => {
		assert.strictEqual(typeof create, 'function');
	});

	/**
	 */
	it('type of create() === "function"', () => {
		let noop = create();
		assert.strictEqual(typeof noop, 'function');
	});
	
	/**
	 */
	it('create()() === undefined', () => {
		let noop = create();
		assert.strictEqual(noop(), void 0);
	});

	/**
	 */
	it('create(123)() === 123', () => {
		let noop = create(123);
		assert.strictEqual(noop(), 123);
	});

	/**
	 */
	it('create("foo")() === "foo"', () => {
		let noop = create('foo');
		assert.strictEqual(noop(), 'foo');
	});

	/**
	 */
	it('create(null)() === null', () => {
		let noop = create(null);
		assert.strictEqual(noop(), null);
	});

	/**
	 */
	it('create(undefined)() === undefined', () => {
		let noop = create(undefined);
		assert.strictEqual(noop(), undefined);
	});
});