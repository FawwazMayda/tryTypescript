import { Controller, Get } from '@nestjs/common';
import { fast, bad, badOffloaded } from '../taking-whole-cpu.js';

@Controller()
export class AppController {
  @Get('fast')
  getFast(): string {
    return fast();
  }

  @Get('bad')
  getBad(): string {
    return bad();
  }

  @Get('bad-worker')
  getBadWorker(): Promise<string> {
    return badOffloaded();
  }
}
