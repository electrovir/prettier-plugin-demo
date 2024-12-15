import {stringify} from '@augment-vir/common';
import {Doc, doc} from 'prettier';

type NestedStringArray = (string | NestedStringArray)[];

const childProperties = [
    'breakContents',
    'contents',
    'flatContents',
    'parts',
] as const;

export function stringifyDoc(input: Doc | null | undefined, recursive = false): NestedStringArray {
    if (typeof input === 'string' || !input) {
        return [stringify(input)];
    } else if (Array.isArray(input)) {
        return input.map((entry) => stringifyDoc(entry, recursive));
    } else if (recursive) {
        const children = childProperties.reduce((accum: NestedStringArray, currentProperty) => {
            if (currentProperty in input) {
                accum.push(
                    `${currentProperty}:`,
                    stringifyDoc((input as any)[currentProperty], recursive),
                );
            }
            return accum;
        }, []);
        if (children.length) {
            return [
                `${input.type}:`,
                stringifyDoc(children, recursive),
            ];
        }
    }

    return [input.type];
}

export function isDocCommand(
    inputDoc: Doc | undefined | null,
): inputDoc is doc.builders.DocCommand {
    return !!inputDoc && typeof inputDoc !== 'string' && !Array.isArray(inputDoc);
}
