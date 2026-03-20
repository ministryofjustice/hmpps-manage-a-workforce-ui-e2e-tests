"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRunMode = getRunMode;
function getRunMode(testInfo) {
    return testInfo.project.use.headless ? 'headless' : 'headed';
}
