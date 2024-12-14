import {ArrayExpression, ArrayPattern, Node} from 'estree';

export type ArrayLikeNode = ArrayExpression | ArrayPattern;

const arrayLikeNodeTypes = ((
    // maintain types with input strictness
    input: ArrayLikeNode['type'][],
): // but return as string for easy comparison with other node type strings
string[] => input)([
    'ArrayExpression',
    'ArrayPattern',
    // this expression type isn't accounted for in the types, but I saw it used in another plugin
    'TupleExpression' as any,
]);

export function isArrayLikeNode(node: Node): node is ArrayLikeNode {
    return arrayLikeNodeTypes.includes(node.type);
}

