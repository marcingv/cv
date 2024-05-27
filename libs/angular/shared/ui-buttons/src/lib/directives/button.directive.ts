import {
  Directive,
  ElementRef,
  inject,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { ButtonType } from '../types/button-type';

@Directive({
  selector: '[gvCvButton]',
  standalone: true,
})
export class ButtonDirective implements OnChanges, OnInit {
  protected readonly CSS_CLASS: string = 'app-button';
  protected readonly ELEVATED_CSS_CLASS: string = 'app-button-elevated';

  protected readonly THEMES: Record<ButtonType, string> = {
    primary: 'app-button-primary',
    secondary: 'app-button-secondary',
    warning: 'app-button-warning',
    transparent: 'app-button-transparent',
  };

  private renderer: Renderer2 = inject(Renderer2);
  private elementRef: ElementRef<HTMLElement> = inject(ElementRef);
  private htmlElement!: HTMLElement;

  @Input() public gvCvButton: ButtonType = 'primary';
  @Input() public elevated = false;

  public constructor() {
    this.htmlElement = this.elementRef.nativeElement;
  }

  public ngOnInit(): void {
    this.renderer.addClass(this.htmlElement, this.CSS_CLASS);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const themeChange: SimpleChange | undefined = changes['gvCvButton'];

    if (themeChange) {
      this.renderer.removeClass(
        this.htmlElement,
        this.THEMES[themeChange.previousValue as ButtonType],
      );

      this.renderer.addClass(
        this.htmlElement,
        this.THEMES[themeChange.currentValue as ButtonType],
      );
    }

    const elevatedChange: SimpleChange | undefined = changes['elevated'];
    if (elevatedChange) {
      this.renderer.removeClass(this.htmlElement, this.ELEVATED_CSS_CLASS);

      if (elevatedChange.currentValue) {
        this.renderer.addClass(this.htmlElement, this.ELEVATED_CSS_CLASS);
      }
    }
  }
}
