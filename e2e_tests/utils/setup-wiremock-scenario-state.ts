// import axios from 'axios';

// const wiremockBase = 'http://localhost:9090';

// export async function setupScenario(scenarioName: String, requiredScenarioState: String) {
//   await axios.put(`${wiremockBase}/__admin/scenarios/${scenarioName}/state`, { state: requiredScenarioState });
// }

// export async function resetScenario(scenarioName: String) {
//   await axios.put(`${wiremockBase}/__admin/scenarios/${scenarioName}/state`)
// }

// export async function resetAllScenarios() {
//   await axios.post(`${wiremockBase}/__admin/scenarios/reset`);
// }


import axios from 'axios';

const wiremockBase =
  process.env.WIREMOCK_BASE_URL ?? 'http://localhost:9090';

export async function setupScenario(
  scenarioName: string,
  requiredScenarioState: string,
) {
  await axios.put(
    `${wiremockBase}/__admin/scenarios/${encodeURIComponent(scenarioName)}/state`,
    { state: requiredScenarioState },
  );
}

export async function resetScenario(scenarioName: string) {
  await axios.put(
    `${wiremockBase}/__admin/scenarios/${encodeURIComponent(scenarioName)}/state`,
  );
}

export async function resetAllScenarios() {
  await axios.post(`${wiremockBase}/__admin/scenarios/reset`);
}
