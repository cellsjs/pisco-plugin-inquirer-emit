'use strict';

/* global define, it, describe, before, after */
const exec = require('child_process').exec;
const execSync = require('child_process').execSync;
const chai = require('chai');
const expect = chai.expect;
const recipeTestFolder = 'test/plugin-test';
const pctp = require('pisco-callback-to-promise');

describe('this.inquireEmit() addon validation', function() {
  this.timeout(60000);

  before('Before script', function(done) {
    execSync('npm install -g', {cwd: recipeTestFolder});
    done();
  });

  it('Should work inquiring configuration', function(done) {
    this.timeout(3000);
    pctp.c2p(exec, 'npm config get prefix', {})
      .then((stdout) => Promise.resolve(`${stdout.trim()}/lib/node_modules/plugin-test/bin/pisco.js`))
      .then((pisco) => {
        pctp.c2p(exec, `echo "valueInquire" | node ${pisco} context-test:test-inquire-emit --paramsFile ${recipeTestFolder}/../paramsFile/paramEmitPrompts.json`, {})
          .then((stdout) => {
            expect(stdout).contain('step1:valueInquire/value2/value3');
            expect(stdout).contain('step2:valueInquire/value2/value3');
            done();
          });
      })
      .catch(done);
  });

  after('After script', function(done) {
    execSync('npm uninstall -g', {cwd: recipeTestFolder});
    done();
  });
});
