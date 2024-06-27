import { computed, inject, Injectable, Signal } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { Course, CvData, ProjectExperience } from '@gv-cv/shared-util-types';
import { CvDataSelectors } from '@gv-cv/angular-data-access-cv';

@Injectable()
export class HomePageService {
  private store: Store = inject(Store);

  private cvDataStore$: Observable<CvData> = this.store
    .select(CvDataSelectors.selectCvDataForCurrentLanguage)
    .pipe(
      filter((data: CvData | undefined) => !!data),
      map((data: CvData | undefined) => data as CvData),
    );

  public cvData: Signal<CvData> = toSignal(this.cvDataStore$, {
    requireSync: true,
  });

  public visibleCourses: Signal<Course[]> = computed(() =>
    this.cvData().courses.filter((oneCourse: Course) => oneCourse.visible),
  );

  public visibleProjects: Signal<ProjectExperience[]> = computed(() =>
    this.cvData().projects.filter(
      (oneProject: ProjectExperience) => oneProject.visible,
    ),
  );

  public leadingCertificate: Signal<Course | undefined> = toSignal(
    this.store
      .select(CvDataSelectors.selectLeadingCertificate)
      .pipe(filter((cert: Course | undefined) => !!cert)),
  );
}
