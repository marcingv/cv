import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'gv-cv-printing-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv-printing-layout.component.html',
  styleUrl: './cv-printing-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvPrintingLayoutComponent {
  public footerText$ = new BehaviorSubject<string>(
    'Wyrażam zgodę na przetwarzanie moich danych osobowych w celu prowadzenia rekrutacji na aplikowane przeze mnie stanowisko.',
  );
}
