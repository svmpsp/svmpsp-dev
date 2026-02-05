import { execSync } from 'child_process';
import { unlinkSync } from 'fs';
import { resolve } from 'path';

const TEST_DB_PATH = resolve('prisma/test.db');

export function setup() {
  process.env.DATABASE_URL = 'file:./test.db';
  execSync('pnpm prisma db push --skip-generate', {
    env: { ...process.env, DATABASE_URL: 'file:./test.db' },
    stdio: 'ignore',
  });
}

export function teardown() {
  try {
    unlinkSync(TEST_DB_PATH);
  } catch {
    // test.db may not exist
  }
  try {
    unlinkSync(TEST_DB_PATH + '-journal');
  } catch {
    // journal may not exist
  }
}
