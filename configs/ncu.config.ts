import {baseNcuConfig} from '@virmator/deps/configs/ncu.config.base';
import {RunOptions} from 'npm-check-updates';

export const ncuConfig: RunOptions = {
    ...baseNcuConfig,
    // exclude these
    reject: [
        ...baseNcuConfig.reject,
    ],
    // include only these
    filter: [],
};
