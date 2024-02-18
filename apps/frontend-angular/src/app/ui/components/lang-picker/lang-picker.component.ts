import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { LangCode } from '@gv-cv/shared-util-types';

@Component({
  selector: 'app-lang-picker',
  standalone: true,
  imports: [NgClass],
  templateUrl: './lang-picker.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangPickerComponent {
  @Input({ required: true }) public currentLang!: LangCode;
  @Input({ required: true }) public availableLangs: LangCode[] = [];
  @Output() public langChange: EventEmitter<LangCode> =
    new EventEmitter<LangCode>();
}
