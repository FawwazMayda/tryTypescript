import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';
import { fileURLToPath } from 'url';

export function fast(): string {
  return 'fast';
}

// Blocks the main event loop for elapsedTimeMs — everything else (incl. /fast) waits too.
export function bad(): string {
  const startTime = Date.now()
  const elapsedTimeMs = 7000;
  while(Date.now() - startTime < elapsedTimeMs) {}
  return 'bad';
}

// Same heavy loop as bad(), but run on a separate worker thread so the main
// event loop (and /fast) stays free while this runs.
export function badOffloaded(ms = 7000): Promise<string> {
  return new Promise((resolve, reject) => {
    const worker = new Worker(fileURLToPath(import.meta.url), {
      workerData: { ms },
      execArgv: ['--loader', 'ts-node/esm'],
    });
    worker.once('message', (msg: string) => resolve(msg));
    worker.once('error', reject);
  });
}

// This file gets spawned as its own worker thread by badOffloaded() above.
// When running there (not the main thread), do the heavy loop and report back.
if (!isMainThread) {
  const startTime = Date.now();
  while (Date.now() - startTime < workerData.ms) {}
  parentPort?.postMessage('bad-offloaded done');
}
