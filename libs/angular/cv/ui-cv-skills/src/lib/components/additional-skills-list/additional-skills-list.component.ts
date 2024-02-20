import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Skill } from '@gv-cv/shared-util-types';

@Component({
  selector: 'gv-cv-additional-skills-list',
  standalone: true,
  imports: [],
  templateUrl: './additional-skills-list.component.html',
  styleUrl: './additional-skills-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdditionalSkillsListComponent {
  @Input({ required: true }) public data: Skill[] = [];
}
