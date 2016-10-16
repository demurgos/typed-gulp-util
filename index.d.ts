import * as _vinyl from 'vinyl';


import * as _chalk from 'chalk';

import * as _dateformat from 'dateformat';

// import * as _beeper from 'beeper';
// declare const _beeper: any;

export const File: typeof _vinyl;

// import * as _replaceExtension from 'replace-ext';
/**
 * Replaces a file extension in a path. Returns the new path.
 */
export function replaceExtension(path: string, newExtension: string): string;

export const colors: typeof _chalk;
export const date: typeof _dateformat;
export type date = typeof _dateformat;
export {log} from './lib/log';
export {template} from './lib/template';
export {env} from './lib/env';
export const beep: any;
export {noop} from './lib/noop';
export {isStream} from './lib/isStream';
export {isBuffer} from './lib/isBuffer';
export {isNull} from './lib/isNull';
export {combine} from './lib/combine';
export const linefeed: string;
export {buffer} from './lib/buffer';
export {PluginError, PluginErrorOptions} from './lib/PluginError';
