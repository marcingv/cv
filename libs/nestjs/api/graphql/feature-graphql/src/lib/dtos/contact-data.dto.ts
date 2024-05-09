import { ContactData } from '@gv-cv/shared-util-types';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ContactDataDto implements ContactData {
  @Field()
  country!: string;

  @Field()
  city!: string;

  @Field({ nullable: true })
  phone?: string | undefined;

  @Field({ nullable: true })
  email?: string | undefined;

  @Field({ nullable: true })
  github?: string | undefined;

  @Field({ nullable: true })
  www?: string | undefined;
}
