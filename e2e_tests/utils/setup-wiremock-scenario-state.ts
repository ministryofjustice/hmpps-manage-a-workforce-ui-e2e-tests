import axios from 'axios';

const wiremockBase = 'http://localhost:9090/__scenario/set';

async function setupScenario(requiredScenarioState:String) {
  await axios.post(`${wiremockBase}/${requiredScenarioState}`);
}

