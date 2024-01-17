import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Skill } from '../../domain/models';
import { GroupSkillsByCategoryPipe } from '../pipes';
import { JsonPipe, KeyValuePipe } from '@angular/common';
import { SkillsChipsListComponent } from '../skills-chips-list';

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
