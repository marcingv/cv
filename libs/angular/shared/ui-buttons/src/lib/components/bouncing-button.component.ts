import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconArrowDownTrayComponent } from '@gv-cv/angular-ui-icons';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonDirective } from '../directives/button.directive';
import { ButtonType } from '../types/button-type';

@Component({
  selector: 'gv-cv-bouncing-button',
  standalone: true,
  imports: [
    CommonModule,
    IconArrowDownTrayComponent,
    TranslateModule,
    ButtonDirective,
  ],
  templateUrl: './bouncing-button.component.html',
  styleUrl: './bouncing-button.component.css',
})
export class BouncingButtonComponent {
  protected readonly THEMES: Record<ButtonType, string> = {
    primary: 'bg-gray-800 dark:bg-gray-400',
    secondary: 'bg-gray-600 dark:bg-orange-300',
    warning: 'bg-orange-800 dark:bg-orange-400',
    transparent: 'bg-gray-600 dark:bg-orange-300',
  };

  @Input({ required: true }) public type: ButtonType = 'primary';
  @Input() public elevated = false;
  @Input() public pingAnimationEnabled = true;
  @Input() public disabled = false;
  @Input() public title?: string;

  @Output() public clicked = new EventEmitter<MouseEvent>();

  public onClicked($event: MouseEvent): void {
    console.warn('clicked :)');
    if (!this.disabled) {
      this.clicked.next($event);
    }
  }
}
