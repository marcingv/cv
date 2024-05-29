import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '@gv-cv/shared-util-types';
import {
  IconArrowDownTrayComponent,
  LogoAngularTrainingComponent,
  LogoOracleComponent,
  LogoUdemyComponent,
} from '@gv-cv/angular-ui-icons';

@Component({
  selector: 'gv-cv-course-list-item',
  standalone: true,
  imports: [
    CommonModule,
    IconArrowDownTrayComponent,
    LogoOracleComponent,
    LogoUdemyComponent,
    LogoAngularTrainingComponent,
  ],
  templateUrl: './course-list-item.component.html',
  styleUrl: './course-list-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListItemComponent {
  @Input({ required: true }) course!: Course;
}
