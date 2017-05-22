'use strict';

module.exports = {
  run() {
    this.logger.info('#blue', `step1:${this.params.param1}/${this.params.param2}/${this.params.param3}`);
  }
};
