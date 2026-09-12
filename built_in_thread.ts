import { scrypt } from 'crypto';
import { promisify } from 'util';

import os from 'os';
console.log(os.cpus().length);

const scryptAsync = promisify(scrypt);

async function timed(label: string) {
  const start = Date.now();
  await scryptAsync('password', 'salt', 64);
  console.log(label, Date.now() - start, 'ms');
}

// fire 8 at once — but the pool only has 4 threads by default
await Promise.all(Array.from({ length: 16 }, (_, i) => timed(`job ${i}`)));