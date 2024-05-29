import { Component, Input } from '@angular/core';

@Component({ selector: 'gv-cv-base-logo', template: '' })
export abstract class BaseLogoComponent {
  @Input() public cssClass = 'h-4';
}
