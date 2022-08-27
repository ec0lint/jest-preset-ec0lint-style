'use strict';

// Mock should be before stylelint required. Even if it's required inside other modules
jest.mock('ec0lint-style/lib/utils/getOsEol', () => () => '\n');

const getTestRule = require('./getTestRule');

global.testRule = getTestRule();
