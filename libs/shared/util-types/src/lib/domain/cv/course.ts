import { DateString } from '../../dtos';

export interface Course {
  platform: 'udemy' | 'oracle' | 'angular-training' | string;
  name: string;
  date: DateString;
  certFileUrl?: string;
}
