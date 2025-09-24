import axios from 'axios';

const wiremockBase = 'http://localhost:9090';

export async function setupScenario(requiredScenarioState:String) {
  await axios.put(`${wiremockBase}/__admin/scenarios/${requiredScenarioState}/state`, { state: requiredScenarioState });
}

export async function resetScenario(requiredScenarioState:String) {
  await axios.put(`${wiremockBase}/__admin/scenarios/${requiredScenarioState}/state`)
}

export async function resetAllScenarios() {
  await axios.post(`${wiremockBase}/__admin/scenarios/reset`);
}

