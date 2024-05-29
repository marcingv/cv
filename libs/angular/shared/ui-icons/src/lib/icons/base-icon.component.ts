import { Component, Input } from '@angular/core';

@Component({ selector: 'gv-cv-base-icon', template: '' })
export abstract class BaseIconComponent {
  @Input() public strokeWidth = 1.5;
  @Input() public cssClass = 'size-4';
}
