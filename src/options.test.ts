import {describe, itCases} from '@augment-vir/test';
import {MultilineArrayOptions, optionPropertyValidators} from './options.js';

describe('optionPropertyValidators', () => {
    itCases(
        (optionType: keyof MultilineArrayOptions, input: unknown) => {
            return optionPropertyValidators[optionType](input);
        },
        [
            {
                it: 'allows -1 for multilineArraysWrapThreshold',
                inputs: [
                    'multilineArraysWrapThreshold',
                    -1,
                ],
                expect: true,
            },
            {
                it: 'allows numbers for multilineArraysWrapThreshold',
                inputs: [
                    'multilineArraysWrapThreshold',
                    63,
                ],
                expect: true,
            },
            {
                it: 'rejects strings for multilineArraysWrapThreshold',
                inputs: [
                    'multilineArraysWrapThreshold',
                    '63',
                ],
                expect: false,
            },
            {
                it: 'allows numeric strings for multilineArraysLinePattern',
                inputs: [
                    'multilineArraysLinePattern',
                    '63',
                ],
                expect: true,
            },
            {
                it: 'rejects non-numeric strings for multilineArraysLinePattern',
                inputs: [
                    'multilineArraysLinePattern',
                    '63 keys',
                ],
                expect: false,
            },
        ],
    );
});
