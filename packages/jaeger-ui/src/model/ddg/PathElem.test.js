// Copyright (c) 2019 Uber Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import PathElem from './PathElem';

describe('PathElem', () => {
  const testOperation = {};
  const testPath = {
    focalIdx: 5,
  };
  const testMemberIdx = 3;
  const testVisibilityIdx = 105;
  let pathElem;

  beforeEach(() => {
    pathElem = new PathElem({ path: testPath, operation: testOperation, memberIdx: testMemberIdx });
  });

  it('initializes instance properties', () => {
    expect(pathElem.memberOf).toBe(testPath);
    expect(pathElem.operation).toBe(testOperation);
    expect(pathElem.memberIdx).toBe(testMemberIdx);
  });

  it('calculates distance', () => {
    expect(pathElem.distance).toBe(-2);
  });

  it('sets visibilityIdx', () => {
    pathElem.visibilityIdx = testVisibilityIdx;
    expect(pathElem.visibilityIdx).toBe(testVisibilityIdx);
  });

  it('errors when trying to access unset visibilityIdx', () => {
    expect(() => pathElem.visibilityIdx).toThrowError();
  });

  it('errors when trying to override visibilityIdx', () => {
    pathElem.visibilityIdx = testVisibilityIdx;
    expect(() => {
      pathElem.visibilityIdx = testVisibilityIdx;
    }).toThrowError();
  });
});
