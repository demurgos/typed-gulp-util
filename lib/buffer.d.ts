/**
 * This is similar to es.wait but instead of buffering text into one string
 * it buffers anything into an array (so very useful for file objects).
 */
export function buffer(cb?: (err: Error, data: any[]) => void): NodeJS.ReadWriteStream;
