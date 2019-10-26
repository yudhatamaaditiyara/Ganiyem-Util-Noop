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
'use strict';

/**
 * @+
 */
module.exports = {
	create: require('./lib/create'),
	returnFalse: require('./lib/returnFalse'),
	returnFunction: require('./lib/returnFunction'),
	returnNull: require('./lib/returnNull'),
	returnThis: require('./lib/returnThis'),
	returnTrue: require('./lib/returnTrue'),
	returnUndefined: require('./lib/returnUndefined'),
	createPromise: require('./lib/createPromise'),
	returnFalsePromise: require('./lib/returnFalsePromise'),
	returnFunctionPromise: require('./lib/returnFunctionPromise'),
	returnNullPromise: require('./lib/returnNullPromise'),
	returnThisPromise: require('./lib/returnThisPromise'),
	returnTruePromise: require('./lib/returnTruePromise'),
	returnUndefinedPromise: require('./lib/returnUndefinedPromise')
};