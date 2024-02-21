import { EmployeeData } from '@gv-cv/shared-util-types';
import { ApiProperty } from '@nestjs/swagger';
import { ContactDataDto } from './contact-data.dto';
import { SkillDto } from './skill.dto';
import { HobbyDto } from './hobby.dto';

export class EmployeeDataDto implements EmployeeData {
  @ApiProperty() firstName!: string;
  @ApiProperty() lastName!: string;
  @ApiProperty() specialization!: string;
  @ApiProperty() contact!: ContactDataDto;
  @ApiProperty() about?: string | undefined;
  @ApiProperty({ type: [SkillDto] }) skills!: SkillDto[];
  @ApiProperty({ type: [SkillDto] }) additionalSkills!: SkillDto[];
  @ApiProperty({ type: [HobbyDto] }) hobbies!: HobbyDto[];
}
