import { DateString } from '../../dtos';

export interface Course {
  platform: string;
  name: string;
  date: DateString;
  certFileUrl?: string;
}
