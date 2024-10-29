import 'tsconfig-paths/register';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';

export default async (): Promise<void> => {
  console.log('# Started Jest globalTeardown.');
  const moduleRef = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  const app = moduleRef.createNestApplication();
  await app.init();
  await app.close();

  console.log('# Finished Jest globalTeardown.');
};
