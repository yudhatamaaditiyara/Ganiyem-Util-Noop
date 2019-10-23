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

describe("createPromise", () => {

	it("typeof function", () => {
		assert.ok(typeof createPromise === "function");
	});

	it("createPromise() -> typeof function", () => {
		let noop = createPromise();
		assert.ok(typeof noop === "function");
	});
	
	it("createPromise()() -> instanceof Promise", () => {
		let noop = createPromise();
		assert.ok(noop() instanceof Promise);
	});

	it("await createPromise()() -> typeof undefined", async () => {
		let noop = createPromise();
		assert.ok(typeof (await noop()) === "undefined");
	});

	it("valid return value", async () => {
		let noop = createPromise(null);
		assert.ok(await noop() === null);
		return createPromise(true)().then(value => {
			assert.ok(value === true);
		});
	});

});