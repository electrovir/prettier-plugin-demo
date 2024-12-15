import {BaseNode} from 'estree';
import {extractTextBetweenRanges} from '../augments/array.js';

export function containsTrailingComma(
    nodeLocation: BaseNode['loc'],
    children: (BaseNode | null)[],
    originalLines: string[],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    debug: boolean,
): boolean {
    const lastElement = children[children.length - 1];
    if (lastElement) {
        const startLocation = lastElement.loc?.end;
        if (!startLocation) {
            return false;
        }
        const endLocation = nodeLocation?.end;
        if (!endLocation) {
            return false;
        }
        const textPastLastElement = extractTextBetweenRanges(originalLines, {
            start: {
                column: startLocation.column - 1,
                line: startLocation.line - 1,
            },
            end: {
                column: endLocation.column - 1,
                line: endLocation.line - 1,
            },
        });

        if (textPastLastElement.includes(',')) {
            return true;
        }
    }
    return false;
}
