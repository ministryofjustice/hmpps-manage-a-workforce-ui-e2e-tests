"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupScenario = setupScenario;
exports.resetScenario = resetScenario;
exports.resetAllScenarios = resetAllScenarios;
const axios_1 = __importDefault(require("axios"));
const wiremockBase = 'http://localhost:9090';
async function setupScenario(scenarioName, requiredScenarioState) {
    await axios_1.default.put(`${wiremockBase}/__admin/scenarios/${scenarioName}/state`, { state: requiredScenarioState });
}
async function resetScenario(scenarioName) {
    await axios_1.default.put(`${wiremockBase}/__admin/scenarios/${scenarioName}/state`);
}
async function resetAllScenarios() {
    await axios_1.default.post(`${wiremockBase}/__admin/scenarios/reset`);
}
