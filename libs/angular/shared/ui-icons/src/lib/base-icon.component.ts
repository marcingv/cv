import { Directive, Input } from '@angular/core';

@Directive()
export abstract class BaseIconComponent {
  @Input() public strokeWidth = 1.5;
  @Input() public class = 'size-4';
}
