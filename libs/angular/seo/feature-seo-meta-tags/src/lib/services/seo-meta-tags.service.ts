import { inject, Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoMetaTagsService {
  private metaService = inject(Meta);

  public setDescription(description: string): void {
    this.setMetaTagValue('description', description);
  }

  private setMetaTagValue(name: string, value: string): void {
    const existingTag = this.metaService.getTag(`name="${name}"`);
    if (existingTag) {
      existingTag.content = value;
    } else {
      this.metaService.addTag({ name: name, content: value });
    }
  }
}
