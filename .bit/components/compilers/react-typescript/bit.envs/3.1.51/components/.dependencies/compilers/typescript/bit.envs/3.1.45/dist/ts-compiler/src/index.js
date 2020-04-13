"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_compiler_1 = require("./typescript-compiler");
exports.TypescriptCompiler = typescript_compiler_1.TypescriptCompiler;
const typescript_preset_1 = require("./typescript-preset");
exports.default = new typescript_compiler_1.TypescriptCompiler(typescript_preset_1.typeScriptPreset);
