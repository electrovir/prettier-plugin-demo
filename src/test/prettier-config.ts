import {Options} from 'prettier';
// @ts-expect-error: ignore this import cause it's not typed. This file itself is manually typing it.
import importedRepoConfig from '../../prettier.config.mjs';

export const repoConfig: Options = importedRepoConfig as Options;
