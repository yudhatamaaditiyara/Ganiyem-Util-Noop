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
const {returnThisPromise} = require('../../');

/**
 */
describe('returnThisPromise', () => {
	/**
	 */
	it('type of function', () => {
		assert.strictEqual(typeof returnThisPromise, 'function');
	});

	/**
	 */
	it('returnThisPromise() instance of Promise', () => {
		assert.ok(returnThisPromise() instanceof Promise);
	});

	/**
	 */
	it('await returnThisPromise.call(this) === this', async () => {
		assert.strictEqual(await returnThisPromise.call(this), this);
	});

	/**
	 */
	it('await #context.returnThisPromise() === #context', async () => {
		var context = {returnThisPromise: returnThisPromise};
		assert.strictEqual(await context.returnThisPromise(), context);
	});
	
	/**
	 */
	it('returnThisPromise.call(this).then(value === this)', () => {
		return returnThisPromise.call(this).then(value => {
			assert.strictEqual(value, this);
		})
	});

	/**
	 */
	it('#context.returnThisPromise.call(this).then(value === #context)', () => {
		var context = {returnThisPromise: returnThisPromise};
		return context.returnThisPromise().then(value => {
			assert.strictEqual(value, context);
		})
	});
});