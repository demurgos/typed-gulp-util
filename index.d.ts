import * as _vinyl from "vinyl";
// import * as _replaceExtension from "replace-ext";
declare const _replaceExtension: any;
import * as _chalk from "chalk";
import * as _dateformat from "dateformat";
// import * as _beeper from "beeper";
declare const _beeper: any;

export const File = _vinyl;

/**
 * Replaces a file extension in a path. Returns the new path.
 */
export const replaceExtension = _replaceExtension;
export const colors = _chalk;
export const date = _dateformat;
export type date = typeof _dateformat;
export {log} from "./lib/log.d.ts";
export {template} from "./lib/template.d.ts";
export {env} from "./lib/env.d.ts";
export const beep = _beeper;
export {noop} from "./lib/noop.d.ts";
export {isStream} from "./lib/isStream.d.ts";
export {isBuffer} from "./lib/isBuffer.d.ts";
export {isNull} from "./lib/isNull.d.ts";
export {combine} from "./lib/combine.d.ts";
export const linefeed: string;
export {buffer} from "./lib/buffer";
export {PluginError, PluginErrorOptions} from "./lib/PluginError";
