'use strict';


module.exports = {
  check() {
    if (this.params.emitPrompts && !this.params.disablePrompts) {
      this.logger.trace('#blue', 'running inquire for emitPrompts...');
      return this.inquire('emitPrompts');
    }
  },

  emit() {
    let ret = {};
    if (this.params.emitPrompts && !this.params.disablePrompts) {
      this.logger.trace('#white', 'emitting emitPrompts params...');
      this.params.emitPrompts.map((param) => { ret[param.name] = this.params[param.name] });
    }
    return ret;
  }
};