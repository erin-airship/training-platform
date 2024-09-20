//tests/e2e/global.teardown.ts

import { test as teardown } from '@playwright/test';

// teardown('delete database', async ({}) => {
//   console.log('deleting test database...');
//   // Delete the database
//   await global.__ENVIRONMENT__?.down();
//   console.log('Test database successfully deleted...');
// });

async function globalSetup() {
  console.log('deleting test database...');
  // Delete the database
  await global.__ENVIRONMENT__?.down();
  console.log('Test database successfully deleted...');
}

export default globalSetup;