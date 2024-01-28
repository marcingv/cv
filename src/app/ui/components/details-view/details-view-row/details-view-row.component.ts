import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  HostBinding,
  Input,
  TemplateRef,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { DetailsViewRowLabelDirective } from './directives/details-view-row-label.directive';
import { DetailsViewRowValueDirective } from './directives/details-view-row-value.directive';

@Component({
  selector: 'app-details-view-row',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './details-view-row.component.html',
  styleUrl: './details-view-row.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsViewRowComponent {
  @Input() public label?: string;
  @Input() public value?: string;

  @HostBinding('class') public hostClass: string = 'flex flex-row gap-3';

  @ContentChild(DetailsViewRowLabelDirective, {
    static: true,
    read: TemplateRef,
  })
  public labelTpl?: TemplateRef<unknown>;

  @ContentChild(DetailsViewRowValueDirective, {
    static: true,
    read: TemplateRef,
  })
  public valueTpl?: TemplateRef<unknown>;
}
