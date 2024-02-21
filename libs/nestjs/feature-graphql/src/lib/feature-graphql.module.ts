import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import * as path from 'path';
import { CvDataResolver } from './resolvers/cv-data.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: process.env['GRAPHQL_PLAYGROUND'] === 'true',
      autoSchemaFile: true,
      // autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'), // Can be set to true for in-memory schemas
    }),
  ],
  controllers: [],
  providers: [CvDataResolver],
  exports: [],
})
export class FeatureGraphqlModule {}
