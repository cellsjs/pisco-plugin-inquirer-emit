'use strict';

module.exports = {
  run: function(ok, ko) {
    this.logger.info('#blue', `step2:${this.params.param1}/${this.params.param2}/${this.params.param3}`);
  }
};
