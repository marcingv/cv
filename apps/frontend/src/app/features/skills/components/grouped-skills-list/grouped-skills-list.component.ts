import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { JsonPipe, KeyValuePipe } from '@angular/common';
import { SkillsChipsListComponent } from '../skills-chips-list';
import { GroupSkillsByCategoryPipe } from '../../pipes';
import { Skill } from '@gv-cv/shared-util-types';

@Component({
  selector: 'app-grouped-skills-list',
  standalone: true,
  imports: [
    GroupSkillsByCategoryPipe,
    JsonPipe,
    KeyValuePipe,
    SkillsChipsListComponent,
  ],
  templateUrl: './grouped-skills-list.component.html',
  styleUrl: './grouped-skills-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupedSkillsListComponent {
  @Input({ required: true }) public data: Skill[] = [];
}
