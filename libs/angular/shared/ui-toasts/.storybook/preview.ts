import { applicationConfig, Preview } from '@storybook/angular';
import { provideAnimations } from '@angular/platform-browser/animations';

const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
  // parameters: {
  //   layout: 'centered',
  // },
};

export default preview;
