import { ProjectExperience } from '@gv-cv/shared-util-types';
import { Field, ObjectType } from '@nestjs/graphql';
import { SkillDto } from './skill.dto';

@ObjectType()
export class ProjectExperienceDto implements ProjectExperience {
  @Field()
  name!: string;

  @Field({ nullable: true })
  companyName?: string | undefined;

  @Field()
  role!: string;

  @Field()
  description!: string;

  @Field(() => [String])
  responsibilities!: string[];

  @Field()
  from!: string;

  @Field({ nullable: true })
  to?: string | undefined;

  @Field(() => [SkillDto], { nullable: true })
  usedSkills?: SkillDto[] | undefined;

  @Field()
  visible!: boolean;

  @Field()
  printable!: boolean;
}
