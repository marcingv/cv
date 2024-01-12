import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CvData } from '../../../domain/models/cv-data';

@Injectable({
  providedIn: 'root',
})
export class CvDataApiService {
  public constructor() {}

  public fetchData(): Observable<CvData> {
    const cvData: CvData = {
      employee: {
        firstName: 'Marcin',
        lastName: 'Gawski',
        specialization: 'Programista Angular',
        about:
          'Zajmuję się programowaniem. Podczas codziennej pracy kładę duży nacisk na jakość wytwarzanego oprogramowania.',
        skills: [
          { name: 'Angular', category: 'frontend' },
          { name: 'TypeScript', category: 'frontend' },
          { name: 'RxJS', category: 'frontend' },
          { name: 'NgRX', category: 'frontend' },
          { name: 'CSS & SASS', category: 'frontend' },
          { name: 'Bootstrap', category: 'frontend' },
          { name: 'PrimeNg', category: 'frontend' },
          { name: 'KendoUI', category: 'frontend' },
          { name: 'Cypress', category: 'frontend-testing' },
          { name: 'Jasmine & Karma', category: 'frontend-testing' },
          { name: 'Prettier', category: 'frontend-testing' },
          { name: 'Docker' },
          { name: 'PHP', category: 'backend' },
          { name: 'Symfony', category: 'backend' },
          { name: 'Codeception', category: 'backend-testing' },
          { name: 'PHPUnit', category: 'backend-testing' },
          { name: 'GIT' },
          { name: 'GitLab' },
          { name: 'REST' },
          { name: 'Websockets' },
          { name: 'SonarCube' },
          { name: 'PostgreSQL', category: 'databases' },
          { name: 'MySQL', category: 'databases' },
          { name: 'RabbitMQ', category: 'backend' },
          { name: 'Apache', category: 'backend' },
          { name: 'NGiNX', category: 'backend' },
          { name: 'SCRUM', category: 'methodology' },
          { name: 'TDD', category: 'methodology' },
          { name: 'OOP', category: 'methodology' },
          { name: 'CleanCode', category: 'methodology' },
          { name: 'SOLID', category: 'methodology' },
          { name: 'KISS', category: 'methodology' },
        ],
        additionalSkills: [
          {
            name: 'Prawo jazdy kategorii B',
          },
        ],
        contactAddress: {
          city: 'Lublin',
          country: 'Polska',
          email: 'marcin.gawski@gmail.com',
          phone: '781 *** 246',
        },
        hobbies: [
          { name: 'Bilard' },
          { name: 'Podróże' },
          { name: 'Montaż video' },
        ],
      },
      jobs: [
        {
          from: '2010-01-01',
          company: 'Lemisoft',
          description: 'Praca na stanowisku fullstack developer.',
          role: 'Fullstack developer / Team Leader',
          usedSkills: [
            { name: 'Symfony' },
            { name: 'Angular' },
            { name: 'Docker' },
            { name: 'Git' },
            { name: 'GitLab' },
            { name: 'CI/CA/CD' },
          ],
        },
      ],
      education: [
        {
          name: 'Uniwerystet Marii Curie',
          from: '2008-01-01',
          to: '2013-01-01',
          description:
            'Kierunek Informatyka, specjalizacja grafika komputerowa',
        },
      ],
      projects: [
        {
          name: 'System Maklerski #2',
          description:
            'Aplikacja frontend dla systemu maklerskiego współpracującego z GPW.',
          role: 'Senior Angular Developer',
          companyName: 'Sygnity',
          from: '2021-02-01',
          to: '2023-09-30',
          responsibilities: [
            'Odpowiedzialność za projekt architektury aplikacji frontend',
            'Team Leader zespołu programistów, koordynacja prac',
            'Odpowiedzialność za implementację głównych funkcjonalności aplikacji',
            'Dbanie o wysoką jakoś produktu (testy automatyczne, code review)',
          ],
          usedSkills: [
            { name: 'Angular 16' },
            { name: 'RxJS' },
            { name: 'NgRx' },
            { name: 'KendoUI' },
            { name: 'Testy automatyczne' },
            { name: 'Bootstrap' },
            { name: 'SASS' },
          ],
        },
      ],
    };

    return of(cvData);
  }
}
