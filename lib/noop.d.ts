import through2 = require('through2');

/**
 * Returns a stream that does nothing but pass data straight through.
 */
export const noop: typeof through2;
export type noop = typeof through2;
