import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  TemplateRef,
} from '@angular/core';
import { DetailsViewRowLabelDirective } from '../directives/details-view-row-label.directive';
import { NgTemplateOutlet } from '@angular/common';
import { DetailsViewRowValueDirective } from '../directives/details-view-row-value.directive';

@Component({
  selector: 'app-details-view-row',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './details-view-row.component.html',
  styleUrl: './details-view-row.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'details-view-row d-flex gap-3',
  },
})
export class DetailsViewRowComponent {
  @Input() public label?: string;
  @Input() public value?: string;

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
