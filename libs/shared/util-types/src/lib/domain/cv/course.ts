import { DateString } from '../../dtos';

export interface Course {
  platform: 'udemy' | 'oracle' | 'angular-training' | string;
  type?:
    | 'angular-junior-developer'
    | 'angular-developer'
    | 'angular-expert-developer'
    | string;
  name: string;
  date: DateString;
  certFileUrl?: string;
  visible: boolean;
  printable: boolean;
}
