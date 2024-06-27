import { LanguageExperience, LanguageLevel } from '@gv-cv/shared-util-types';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LanguageExperienceDto implements LanguageExperience {
  @Field()
  name!: string;

  @Field(() => String)
  level!: LanguageLevel;
}
