import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {extractTextBetweenRanges} from './array.js';

describe(extractTextBetweenRanges.name, () => {
    it('should extract text from multiple lines', () => {
        assert.strictEquals(
            extractTextBetweenRanges(
                [
                    'a b c d e f g h i j k l m n',
                    'o p q r s',
                    't u v w x y',
                    'z',
                ],
                {start: {line: 0, column: 4}, end: {line: 2, column: 3}},
            ),
            ' d e f g h i j k l m n\no p q r s\nt u',
        );
    });

    it('should extract text from the same line', () => {
        assert.strictEquals(
            extractTextBetweenRanges(['a b c d e f g h i j k l m n'], {
                start: {line: 0, column: 4},
                end: {line: 0, column: 7},
            }),
            ' d',
        );
    });
});
