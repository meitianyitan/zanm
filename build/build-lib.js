/**
 * Build npm lib
 */
const shell = require('shelljs');
const signale = require('signale');
const { Signale } = signale;
const tasks = [
  'bootstrap',
  'lint',
  'build:entry',
  'build:components',
  'build:zanm-css',
  'build:style-entry',
  'build:zanm'
];

tasks.forEach(task => {
  signale.start(task);

  const interactive = new Signale({ interactive: true });
  interactive.pending(task);
  shell.exec(`npm run ${task} --silent`);
  interactive.success(task);
});
