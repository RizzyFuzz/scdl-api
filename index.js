/**
 * Soundcloud API
 * Created by @RizzyFuzz
 * @module scdl-api
 */

const { version, author } = require("./package.json");
const { soundcloud, sndsearch } = require("./lib/soundcloud");

module.exports = {
  version,
  author,
  soundcloud,
  sndsearch
}
