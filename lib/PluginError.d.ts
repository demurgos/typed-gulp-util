export class PluginError implements Error, PluginErrorOptions {
  constructor(options?: PluginErrorOptions);
  constructor(pluginName: string, options?: PluginErrorOptions);
  constructor(pluginName: string, message: string, options?: PluginErrorOptions);
  constructor(pluginName: string, message: Error, options?: PluginErrorOptions);
  /**
   * The module name of your plugin.
   */
  name: string;
  /**
   * Can be a string or an existing error.
   */
  message: any;
  fileName: string;
  lineNumber: number;
  /**
   * You need to include the message along with this stack. If you pass an
   * error in as the message the stack will be pulled from that, otherwise one
   * will be created.
   */
  stack: string;
  /**
   * By default the stack will not be shown. Set this to true if you think the
   * stack is important for your error.
   */
  showStack: boolean;
  /**
   * Error properties will be included in err.toString(). Can be omitted by
   * setting this to false.
   */
  showProperties: boolean;
  plugin: string;
  error: Error;
}


interface PluginErrorOptions {
  /**
   * The module name of your plugin.
   */
  name?: string;
  /**
   * Can be a string or an existing error.
   */
  message?: any;
  fileName?: string;
  lineNumber?: number;
  /**
   * You need to include the message along with this stack. If you pass an
   * error in as the message the stack will be pulled from that, otherwise one
   * will be created.
   */
  stack?: string;
  /**
   * By default the stack will not be shown. Set this to true if you think the
   * stack is important for your error.
   */
  showStack?: boolean;
  /**
   * Error properties will be included in err.toString(). Can be omitted by
   * setting this to false.
   */
  showProperties?: boolean;
  plugin?: string;
  error?: Error;
}


