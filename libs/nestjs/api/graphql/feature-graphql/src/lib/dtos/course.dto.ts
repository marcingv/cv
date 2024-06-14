import { Course } from '@gv-cv/shared-util-types';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CourseDto implements Course {
  @Field()
  platform!: string;

  @Field({ nullable: true })
  type?: string;

  @Field()
  name!: string;

  @Field()
  date!: string;

  @Field({ nullable: true })
  certFileUrl?: string | undefined;
}
