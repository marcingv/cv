import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'gv-cv-base-image-badge',
  template: '',
})
export abstract class BaseImageBadgeComponent {
  protected imageUrl: string;
  protected altText: string;

  @Input() public cssClass?: string;

  @HostBinding('class') private class = 'inline-flex';
  @HostBinding('title') private title = this.getImageTitleText();

  public constructor() {
    this.imageUrl = this.getImageUrl();
    this.altText = this.getImageAltText();
  }

  protected abstract getImageUrl(): string;

  protected abstract getImageAltText(): string;

  protected abstract getImageTitleText(): string;
}
