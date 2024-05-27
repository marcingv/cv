import { ButtonDirective } from './button.directive';
import { Component, DebugElement, Input } from '@angular/core';
import { ButtonType } from '../types/button-type';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'gv-cv-host-component',
  standalone: true,
  template: '<button [gvCvButton]="type"></button>',
  imports: [ButtonDirective],
})
class HostComponent {
  @Input() public type: ButtonType = 'primary';
}

describe('ButtonDirective', (): void => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add button css classes', (): void => {
    const button: DebugElement = fixture.debugElement.query(By.css('button'));

    expect(button).toBeTruthy();
    expect(button.attributes['class']).toContain('app-button');
    expect(button.attributes['class']).toContain('app-button-primary');
  });

  it('should change button type', (): void => {
    const button: DebugElement = fixture.debugElement.query(By.css('button'));

    expect(button).toBeTruthy();
    expect(button.attributes['class']).toContain('app-button');
    expect(button.attributes['class']).toContain('app-button-primary');

    component.type = 'warning';
    fixture.detectChanges();

    expect(button.attributes['class']).toContain('app-button');
    expect(button.attributes['class']).not.toContain('app-button-primary');
    expect(button.attributes['class']).toContain('app-button-warning');
  });
});
