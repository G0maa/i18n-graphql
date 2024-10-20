import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import {
  AcceptLanguageResolver,
  GraphQLWebsocketResolver,
  I18nModule,
} from 'nestjs-i18n';
import { AppResolver } from './app.resolver';
import { AppController } from './app.controller';
import * as path from 'path';

console.log('__dirname', __dirname);
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      subscriptions: {
        'graphql-ws': true,
      },
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      context: (ctx: any) => ctx,
      playground: true,
      sortSchema: true,
    }),
    // I18nModule.forRoot({
    //   fallbackLanguage: 'en',
    //   loaderOptions: {
    //     path: `${__dirname}/src/i18n/`,
    //     watch: true,
    //   },
    //   typesOutputPath: path.join(__dirname, '../src/i18n/i18n.types.ts'),
    //   resolvers: [AcceptLanguageResolver, GraphQLWebsocketResolver],
    // }),
  ],
  providers: [AppService, AppResolver],
  controllers: [AppController],
})
export class AppModule {}
