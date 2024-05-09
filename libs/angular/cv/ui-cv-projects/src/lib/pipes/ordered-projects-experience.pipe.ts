import { Pipe, PipeTransform } from '@angular/core';
import { ProjectExperience } from '@gv-cv/shared-util-types';

@Pipe({
  name: 'orderedProjectsExperience',
  standalone: true,
})
export class OrderedProjectsExperiencePipe implements PipeTransform {
  public transform(projects: ProjectExperience[]): ProjectExperience[] {
    return projects.slice().sort(this.sortByDatesDesc);
  }

  private sortByDatesDesc = (
    a: ProjectExperience,
    b: ProjectExperience,
  ): number => {
    return -1 * this.sortByDatesAsc(a, b);
  };

  private sortByDatesAsc = (
    a: ProjectExperience,
    b: ProjectExperience,
  ): number => {
    const aFromDate: Date = new Date(a.from);
    const aToDate: Date = a.to ? new Date(a.to) : new Date();

    const bFromDate: Date = new Date(b.from);
    const bToDate: Date = b.to ? new Date(b.to) : new Date();

    if (aFromDate.getTime() < bFromDate.getTime()) {
      return -1;
    }
    if (aFromDate.getTime() > bFromDate.getTime()) {
      return 1;
    }

    if (aToDate.getTime() < bToDate.getTime()) {
      return 1;
    }
    if (aToDate.getTime() > bToDate.getTime()) {
      return -1;
    }

    return 0;
  };
}
