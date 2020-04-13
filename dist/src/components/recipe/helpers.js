"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.today = today;
exports.default = void 0;

function today() {
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return new Date().toLocaleDateString(undefined, options);
}

var helpers = {
  today: today
};
var _default = helpers;
exports.default = _default;

//# sourceMappingURL=helpers.js.map