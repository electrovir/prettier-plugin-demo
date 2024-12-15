import {Comment} from 'estree';

const ignoreTheseKeys = ['tokens'];
const ignoreTheseChildTypes = [
    'string',
    'number',
];

const commentTypes = [
    'Line',
    'Block',
    'CommentBlock',
    'CommentLine',
] as const;

function isMaybeComment(input: any): input is Comment {
    return !(
        !input ||
        typeof input !== 'object' ||
        !('type' in input) ||
        !commentTypes.includes(input.type) ||
        !('value' in input)
    );
}

export function extractComments(node: any): Comment[] {
    if (!node || typeof node !== 'object') {
        return [];
    }
    const comments: Comment[] = [];

    if (Array.isArray(node)) {
        comments.push(...node.filter(isMaybeComment));
    }

    Object.keys(node).forEach((nodeKey) => {
        if (!ignoreTheseKeys.includes(nodeKey)) {
            const nodeChild = node[nodeKey];
            if (!ignoreTheseChildTypes.includes(typeof nodeChild)) {
                comments.push(...extractComments(nodeChild));
            }
        }
    });

    // this might duplicate comments but our later code doesn't care
    return comments;
}
