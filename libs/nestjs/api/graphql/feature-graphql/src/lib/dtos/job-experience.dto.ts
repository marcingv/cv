import { JobExperience } from '@gv-cv/shared-util-types';
import { Field, ObjectType } from '@nestjs/graphql';
import { SkillDto } from './skill.dto';

@ObjectType()
export class JobExperienceDto implements JobExperience {
  @Field()
  from!: string;

  @Field({ nullable: true })
  to?: string | undefined;

  @Field()
  company!: string;

  @Field()
  role!: string;

  @Field()
  description!: string;

  @Field(() => [SkillDto])
  usedSkills!: SkillDto[];
}
