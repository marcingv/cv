import { Skill } from './skill';
import { ContactAddress } from './contact-address';
import { Hobby } from './hobby';

export interface EmployeeData {
  firstName: string;
  lastName: string;
  specialization: string;
  contactAddress: ContactAddress;
  about?: string;
  skills: Skill[];
  additionalSkills: Skill[];
  hobbies: Hobby[];
}
