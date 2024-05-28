import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '@gv-cv/shared-util-types';
import {
  IconArrowDownTrayComponent,
  LogoOracleComponent,
  LogoUdemyComponent,
} from '@gv-cv/angular-ui-icons';
import { CourseListItemComponent } from '../course-list-item/course-list-item.component';

@Component({
  selector: 'gv-cv-courses-list',
  standalone: true,
  imports: [
    CommonModule,
    IconArrowDownTrayComponent,
    LogoUdemyComponent,
    LogoOracleComponent,
    CourseListItemComponent,
  ],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css',
})
export class CoursesListComponent {
  @Input({ required: true }) data!: Course[];
}
