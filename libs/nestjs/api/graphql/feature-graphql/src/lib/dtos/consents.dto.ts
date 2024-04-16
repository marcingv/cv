import { Consents } from '@gv-cv/shared-util-types';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ConsentsDto implements Consents {
  @Field()
  RODO!: string;
}
