import { Directive, Input } from '@angular/core';

@Directive()
export abstract class BaseIconComponent {
  @Input() public strokeWidth = 1.5;
  @Input() public cssClass = 'size-4';
}
