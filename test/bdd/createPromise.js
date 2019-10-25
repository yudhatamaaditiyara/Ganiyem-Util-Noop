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
const assert = require("assert");
const {createPromise} = require("../../");

/**
 */
describe("createPromise", () => {
	/**
	 */
	it("type of function", () => {
		assert.strictEqual(typeof createPromise, "function");
	});

	/**
	 */
	it("type of create() === 'function'", () => {
		let noop = createPromise();
		assert.strictEqual(typeof noop, "function");
	});
	
	/**
	 */
	it("createPromise()() instance of Promise", () => {
		let noop = createPromise();
		assert.ok(noop() instanceof Promise);
	});

	/**
	 */
	it("await createPromise()() === undefined", async () => {
		let noop = createPromise();
		assert.strictEqual(await noop(), undefined);
	});

	/**
	 */
	it("await createPromise(123)() === 123", async () => {
		let noop = createPromise(123);
		assert.strictEqual(await noop(), 123);
	});

	/**
	 */
	it("await createPromise('foo')() === 'foo'", async () => {
		let noop = createPromise('foo');
		assert.strictEqual(await noop(), 'foo');
	});

	/**
	 */
	it("await createPromise(null)() === null", async () => {
		let noop = createPromise(null);
		assert.strictEqual(await noop(), null);
	});

	/**
	 */
	it("await createPromise(undefined)() === undefined", async () => {
		let noop = createPromise(undefined);
		assert.strictEqual(await noop(), undefined);
	});

	/**
	 */
	it("createPromise()().then(value === undefined)", () => {
		return createPromise()().then(value => {
			assert.strictEqual(value, undefined);
		});
	});

	/**
	 */
	it("createPromise(123)().then(value === 123)", () => {
		return createPromise(123)().then(value => {
			assert.strictEqual(value, 123);
		});
	});

	/**
	 */
	it("createPromise('foo')().then(value === 'foo')", () => {
		return createPromise("foo")().then(value => {
			assert.strictEqual(value, "foo");
		});
	});

	/**
	 */
	it("createPromise(null)().then(value === null)", () => {
		return createPromise(null)().then(value => {
			assert.strictEqual(value, null);
		});
	});

	/**
	 */
	it("createPromise(undefined)().then(value === undefined)", () => {
		return createPromise(void 0)().then(value => {
			assert.strictEqual(value, void 0);
		});
	});
});