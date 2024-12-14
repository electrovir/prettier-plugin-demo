import {basePrettierConfig} from '@virmator/format/configs/prettier.config.base.mjs';

/**
 * @typedef {import('prettier-plugin-multiline-arrays').MultilineArrayOptions} MultilineOptions
 *
 * @typedef {import('prettier').Options} PrettierOptions
 * @type {PrettierOptions & MultilineOptions}
 */
const prettierConfig = {
    ...basePrettierConfig,

    multilineArraysWrapThreshold: -1,
};

export default prettierConfig;
