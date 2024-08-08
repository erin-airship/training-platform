//global-setup.js

const path = require('path');
const { DockerComposeEnvironment, Wait } = require('testcontainers');

// https://node.testcontainers.org/features/compose/
module.exports = async () => {
    console.log("dirName", __dirname)
  const composeFilePath = path.resolve(__dirname, '../../');
  const composeFile = 'docker-compose.yaml';

  global.__ENVIRONMENT__ = await new DockerComposeEnvironment(
    composeFilePath,
    composeFile
  )
    .withWaitStrategy('flyway-1', Wait.forLogMessage(/^Successfully applied/))
    .up();

  await new Promise((x) => setTimeout(x, 500));
};