import vinyl = require("vinyl");
import chalk = require("chalk");
import dateformat = require("dateformat");
// import beeper = require("beeper");
// import replaceExt = require("replace-ext");

export const File: typeof vinyl;
export type File = typeof vinyl;
/**
 * Replaces a file extension in a path. Returns the new path.
 */
export function replaceExtension(path: string, newExtension: string): string;
export const colors: typeof chalk;
export type colors = typeof chalk;
export const date: typeof dateformat;
export type date = typeof dateformat;
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
