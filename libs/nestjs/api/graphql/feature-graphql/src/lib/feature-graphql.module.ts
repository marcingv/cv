import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CvDataResolver } from './resolvers/cv-data.resolver';
import { DataAccessModule } from '@gv-cv/nestjs-data-access-cv';
// import * as path from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: process.env['GRAPHQL_PLAYGROUND'] === 'true',
      autoSchemaFile: true,
      // autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'), // Can be set to true for in-memory schemas
    }),
    DataAccessModule,
  ],
  controllers: [],
  providers: [CvDataResolver],
  exports: [],
})
export class FeatureGraphqlModule {}
