import { Hobby } from '@gv-cv/shared-util-types';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HobbyDto implements Hobby {
  @Field()
  name!: string;
}
