import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { JsonPipe, KeyValuePipe } from '@angular/common';
import { SkillsChipsListComponent } from '../skills-chips-list';
import {
  CategorySkillChipsBgClassPipe,
  GroupSkillsByCategoryPipe,
  SkillCategoryLabelPipe,
} from '../../pipes';
import { Skill } from '@gv-cv/shared-util-types';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'gv-cv-grouped-skills-list',
  standalone: true,
  imports: [
    GroupSkillsByCategoryPipe,
    JsonPipe,
    KeyValuePipe,
    SkillsChipsListComponent,
    SkillCategoryLabelPipe,
    TranslateModule,
    CategorySkillChipsBgClassPipe,
  ],
  templateUrl: './grouped-skills-list.component.html',
  styleUrl: './grouped-skills-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupedSkillsListComponent {
  @Input({ required: true }) public data: Skill[] = [];
}
