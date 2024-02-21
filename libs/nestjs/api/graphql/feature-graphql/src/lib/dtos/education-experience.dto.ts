import { EducationExperience } from '@gv-cv/shared-util-types';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class EducationExperienceDto implements EducationExperience {
  @Field()
  name!: string;

  @Field({ nullable: true })
  description?: string | undefined;

  @Field()
  from!: string;

  @Field({ nullable: true })
  to?: string | undefined;
}
