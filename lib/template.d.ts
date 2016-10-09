/**
 * This is a lodash.template function wrapper. You must pass in a valid gulp
 * file object so it is available to the user or it will error. You can not
 * configure any of the delimiters. Look at the lodash docs for more info.
 */
export function template(tmpl: string): (opt: { file: { path: string } }) => string;
export function template(tmpl: string, opt: { file: { path: string } }): string;
