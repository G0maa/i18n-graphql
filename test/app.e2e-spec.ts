import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { print } from 'graphql';
import gql from 'graphql-tag';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', async () => {
    const response = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: print(gql`
          query {
            helloWorld {
              data {
                text
                number
              }
            }
          }
        `),
      });

    console.log('response.body', response.body);
    expect(response.status).toBe(200);
    expect(response.body.errors).toBeUndefined();
    expect(response.body.data.helloWorld).toMatchObject({
      number: 1,
      text: 'Hello World!',
    });
  });
});
