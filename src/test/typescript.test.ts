import {describe} from '@augment-vir/test';
import {runTests} from './run-tests.mock.js';
import {typescriptTests} from './typescript-tests.mock.js';

describe('typescript multiline array formatting', () => {
    runTests('.ts', typescriptTests, 'typescript');
});
