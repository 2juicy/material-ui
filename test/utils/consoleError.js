<<<<<<< HEAD
/* eslint-disable flowtype/require-valid-file-annotation, no-console */

/**
 * Makes sure the tests fails when a PropType validation fails.
 */
function consoleError() {
  console.error = (...args) => {
    console.log(...args);
=======
/* eslint-disable no-console */

// Makes sure the tests fails when a PropType validation fails.
function consoleError() {
  console.error = (...args) => {
    // Can't use log as karma is not displaying them.
    console.info(...args);
>>>>>>> master
    throw new Error(...args);
  };
}

module.exports = consoleError;
