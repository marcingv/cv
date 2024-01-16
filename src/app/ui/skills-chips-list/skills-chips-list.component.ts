import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Skill } from '../../domain/models';

@Component({
  selector: 'app-skills-chips-list',
  standalone: true,
  imports: [],
  templateUrl: './skills-chips-list.component.html',
  styleUrl: './skills-chips-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsChipsListComponent {
  @Input() public data: Skill[] = [];
}
