import type { Meta, StoryObj } from '@storybook/angular';
import { ToastsContainerComponent } from './toasts-container.component';
import { Component, inject, Input } from '@angular/core';
import { ButtonDirective } from '@gv-cv/angular-ui-buttons';
import { ToastsService } from '../../services/toasts.service';
import { ToastSeverity } from '../../models/toast-severity';

@Component({
  selector: 'gv-cv-host-component',
  standalone: true,
  imports: [ToastsContainerComponent, ButtonDirective],
  template: `
    <div>
      <button gvCvButton="warning" (click)="addToast()">Add toast</button>
    </div>

    <gv-cv-toasts-container></gv-cv-toasts-container>
  `,
})
class HostComponent {
  @Input() public text = 'Toast message!';
  @Input() public severity: ToastSeverity | 'random' = 'random';
  @Input() public durationMs = 2000;

  private toastService = inject(ToastsService);
  private counter = 0;

  public addToast(): void {
    this.toastService.show({
      message: `#${++this.counter} ${this.text}`,
      severity:
        this.severity === 'random'
          ? Math.random() > 0.5
            ? 'primary'
            : 'error'
          : this.severity,
      timeoutMs: this.durationMs,
    });
  }
}

const meta: Meta<HostComponent> = {
  component: HostComponent,
  title: 'ToastsContainerComponent',
  args: {
    text: 'Toast message!',
    severity: 'random',
    durationMs: 2000,
  },
  argTypes: {
    severity: {
      options: ['random', 'primary', 'error'],
      control: { type: 'select' },
    },
  },
};
export default meta;
type Story = StoryObj<HostComponent>;

export const UsingServiceToShowToasts: Story = {
  args: {},
};
