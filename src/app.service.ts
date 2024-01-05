import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Your World!';
  }
  getMyName(): string{
    return  'AdAms'
  }
}
