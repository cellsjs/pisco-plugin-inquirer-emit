'use strict';

/* global define, it, describe, before */
const exec = require('child_process').exec;
const execSync = require('child_process').execSync;
const chai = require('chai');
const expect = chai.expect;
const recipeTestFolder = 'test/plugin-test';

describe('this.inquireEmit() addon validation', function() {
  this.timeout(60000);

  before(function(done) {
    execSync('npm install --save --force ../.. --loglevel=error', { cwd: recipeTestFolder });
    done();
  });

  it('Should work inquiring configuration', function(done) {
    exec(`node ${recipeTestFolder}/bin/pisco.js recipe:test-inquire-emit`, {}, function(error, stdout, stderr) {
      expect(error).to.equal(null);
      expect(stderr).to.equal('');
      expect(stdout).contain('check');

      done();
    });
  });
});