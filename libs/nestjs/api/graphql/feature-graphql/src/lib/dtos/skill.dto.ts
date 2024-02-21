import { Skill, SkillCategory } from '@gv-cv/shared-util-types';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SkillDto implements Skill {
  @Field()
  name!: string;

  @Field({ nullable: true })
  description?: string | undefined;

  @Field(() => String, { nullable: true })
  category?: SkillCategory | undefined;

  @Field({ nullable: true })
  advancementLevel?: number | undefined;
}
