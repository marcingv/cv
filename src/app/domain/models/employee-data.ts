import { Skill } from './skill';
import { ContactData } from './contact-data';
import { Hobby } from './hobby';

export interface EmployeeData {
  firstName: string;
  lastName: string;
  specialization: string;
  contact: ContactData;
  about?: string;
  skills: Skill[];
  additionalSkills: Skill[];
  hobbies: Hobby[];
}
