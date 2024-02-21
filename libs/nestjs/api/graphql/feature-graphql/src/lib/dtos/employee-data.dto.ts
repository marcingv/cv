import { EmployeeData } from '@gv-cv/shared-util-types';
import { SkillDto } from './skill.dto';
import { Field, ObjectType } from '@nestjs/graphql';
import { ContactDataDto } from './contact-data.dto';
import { HobbyDto } from './hobby.dto';

@ObjectType()
export class EmployeeDataDto implements EmployeeData {
  @Field()
  firstName!: string;

  @Field()
  lastName!: string;

  @Field()
  specialization!: string;

  @Field(() => ContactDataDto)
  contact!: ContactDataDto;

  @Field({ nullable: true })
  about?: string | undefined;

  @Field(() => [SkillDto])
  skills!: SkillDto[];

  @Field(() => [SkillDto])
  additionalSkills!: SkillDto[];

  @Field(() => [HobbyDto])
  hobbies!: HobbyDto[];
}
