import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CvData } from '../../../domain/models';

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
          'Jestem programistą fullstack z wieloletnim stażem, zajmującym się technologiami Web oraz\n' +
          'mobilnymi. W codziennej pracy duży nacisk kładę na czytelność i jakość tworzonego kodu.\n' +
          'Stosuje powszechnie sprawdzone reguły CleanCode, SOLID, KISS, DRY. Jestem zwolennikiem\n' +
          'testów automatycznych, konteneryzacji oraz pracy w środowisku ciągłej integracji. Na co dzień,\n' +
          'w zależności od potrzeb/projektu, pracuję w roli pełnoprawnego programisty backend i/lub\n' +
          'frontend. Nierzadko występuje w roli lidera i mentora zespołu programistów. Zdarza mi się\n' +
          'również pełnić rolę architekta.',
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
          from: '2014-02-01',
          company: 'Lemisoft',
          description:
            'Praca na stanowisku fullstack developer. Udział w projektach realizowanych wewnętrznie, oraz zewnętrznie dla firm partnerskich na zasadzie outsourcingu.',
          role: 'Fullstack WEB developer (Angular + Symfony)',
          usedSkills: [
            { name: 'Symfony' },
            { name: 'Angular' },
            { name: 'Docker' },
            { name: 'Git' },
            { name: 'GitLab' },
            { name: 'CI/CA/CD' },
          ],
        },
        {
          from: '2013-04-01',
          to: '2014-01-30',
          company: 'JoomSoft',
          description:
            'Jeden z głównych programistów PHP oraz Android. Odpowiedzialny za implementację kluczowych elementów systemów. Integracje z systemami płatności PayU oraz PayPal. Tworzenie responsywnych projektów stron internetowych. Budowa mechanizmów dostępowych API wykorzystywanych do implementacji mobilnych wersji systemów internetowych na platformie Android. Stworzenie i rozwój biblioteki ORM dla systemu Android.',
          role: 'Programista Web & Android',
          usedSkills: [
            { name: 'PHP' },
            { name: 'Yii 1 & 2' },
            { name: 'Android' },
            { name: 'PostgreSQL' },
          ],
        },
        {
          from: '2008-01-01',
          to: '2013-03-30',
          company: 'Freelancer',
          description:
            'Wykonywanie zleceń od osób prywatnych oraz firm, popartych referencjami oraz portfolio. Zlecenia polegające na kompleksowym wykonaniu aplikacji internetowych, mobilnych na platformę Android oraz projektów graficznych. Rozwój własny oraz implementacja własnych projektów. Zdobycie doświadczenia w zakresie tworzenia rozbudowanych aplikacji internetowych, eCommerce, integracji z systemami płatnosci on-line, budowie rozproszonych aplikacji mobilnych opartych o samodzielnie zaimplementowane interfejsy dostępowe API, własny system zarzadzania trescia oraz wiele innych',
          role: 'Niezależny freelancer',
          usedSkills: [
            { name: 'PHP' },
            { name: 'Yii 1' },
            { name: 'Android' },
            { name: 'CSS' },
            { name: 'REST' },
            { name: 'MySQL' },
          ],
        },
      ],
      education: [
        {
          name: 'Uniwerystet Marii Curie',
          from: '2008-01-01',
          to: '2013-01-01',
          description:
            'Kierunek: Informatyka, specjalizacja grafika komputerowa',
        },
        {
          name: 'IX Liceum Ogólnokształcące im. M. Kopernika w Lublinie',
          from: '2005-01-01',
          to: '2008-01-01',
          description: 'Profil: językowo - informatyczny',
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
            { name: 'Highcharts' },
            { name: 'Websockets' },
          ],
        },
        {
          name: 'System Maklerski #1',
          description:
            'Aplikacja frontend dla systemu maklerskiego współpracującego z GPW.',
          role: 'Angular Developer',
          companyName: 'Sygnity',
          from: '2018-02-01',
          to: '2019-09-30',
          responsibilities: [
            'Rozwój architektury aplikacji',
            'Implementacja nowych funkcjonalności systemu',
            'Dbałość o wysoką jakość produktu',
          ],
          usedSkills: [
            { name: 'Angular 8' },
            { name: 'RxJS' },
            { name: 'PrimeNg' },
            { name: 'Bootstrap' },
            { name: 'SASS' },
            { name: 'Websockets' },
          ],
        },
        {
          name: 'Platforma Usług Elektronicznych Urzędu Patentowego',
          description:
            'Projekt i implementacja Platformy Usług Elektronicznych Urzędu Patentowego w Polsce.',
          role: 'Architekt systemu, PHP Developer, Angular Developer',
          companyName: 'Lemisoft',
          from: '2018-01-01',
          to: '2022-09-30',
          responsibilities: [
            'Projekt architektury systemu oparty o mikroserwisy',
            'Implementacja funkcjolaności systemu zgodnie z wymaganiami (backend, frontend)',
            'Administracja serwerami',
            'Koordynacja prac',
            'Integracje z systemami: PayByNet, CRWDE, GUS, Profil Zaufany',
          ],
          usedSkills: [
            { name: 'Symfony 4' },
            { name: 'REST API' },
            { name: 'CI / CA / CD' },
            { name: 'RabbitMQ' },
            { name: 'PostgreSQL' },
            { name: 'Angular 12' },
            { name: 'RxJS' },
            { name: 'PrimeNg' },
            { name: 'Bootstrap' },
            { name: 'SASS' },
            { name: 'Docker' },
          ],
        },
        {
          name: 'ARSolutions',
          companyName: 'Lemisoft',
          description:
            'Projekt i implementacja systemu wspierającego procesy produkcji w przesiębiorstwach',
          role: 'Architekt systemu, Programista PHP, Programista Angular',
          from: '2020-01-01',
          to: '2021-01-01',
          usedSkills: [
            { name: 'Symfony 5' },
            { name: 'PostgreSQL' },
            { name: 'RabbitMQ' },
            { name: 'HTTP SSE' },
            { name: 'Angular 13' },
            { name: 'Docker' },
            { name: 'CI / CA / CD' },
          ],
          responsibilities: [
            'Projekt architektury systemu',
            'Odpowiedzialność za implementację wybrancyh modułów platformy',
            'Integracje: Mercure, Twillio',
          ],
        },
        {
          name: 'PIU Empatia - wnioski o świadczenia socjalne',
          from: '2017-03-01',
          to: '2018-01-01',
          description:
            'Implementacja modułu na platformie PIU Empatia do składania wniosków o świadczenia socjalne (500+, Karta Dużej Rodziny, itp).',
          companyName: 'Sygnity',
          role: 'Programista Angular / Team Lider',
          responsibilities: [
            'Projekt architektury aplikacji frontend',
            'Implementacja zestawu interaktywnych wniosków',
            'Koordynacja prac zespołu',
          ],
          usedSkills: [{ name: 'Angular 5' }, { name: 'PrimeNg' }],
        },
        {
          name: 'Barometr Zawodów',
          companyName: 'Lemisoft',
          from: '2015-06-01',
          to: '2016-03-31',
          description:
            'Utrzymanie i rozbudowa aplikacji "Barometr zawodów" na zlecenie Wojewódzkiego Urzędu Pracy w Krakowie',
          role: 'Programista WEB (PHP)',
          responsibilities: [
            'Rozbudowa funkcjonalności systemu zgodnie z oczekiwaniami Klienta',
            'Przygotowanie nowej warstwy wizualnej aplikacji, zgodnej z makietami',
          ],
          usedSkills: [
            { name: 'PHP' },
            { name: 'Yii 1' },
            { name: 'MySQL' },
            { name: 'Bootstrap' },
            { name: 'CSS' },
          ],
        },
        {
          name: 'LUME Life',
          companyName: 'Lemisoft',
          from: '2015-01-01',
          to: '2015-07-30',
          role: 'Programista PHP & Android',
          description:
            'Platforma reklamowa oparta o czujniki zbliżeniowie Beacon',
          responsibilities: [
            'REST API na potrzeby aplikacji mobilnej',
            'Implementacja natywnej aplikacji mobilnej dla platformy Android',
          ],
          usedSkills: [{ name: 'PHP' }, { name: 'Yii 1' }, { name: 'Android' }],
        },
        {
          name: 'Nurseum - Terminarz Medyczny',
          companyName: 'Lemisoft',
          from: '2016-07-01',
          to: '2017-12-30',
          description:
            'Narzędzie wspomagające codzienną pracę pielęgniarek oraz rozliczenia z ZUS.',
          role: 'Programista WEB (PHP)',
          responsibilities: [
            'Odpowiedzialność za projekt systemu',
            'Realizacja kluczowych funkcjonalności systemu',
          ],
          usedSkills: [
            { name: 'PHP' },
            { name: 'Yii 2' },
            { name: 'PostgreSQL' },
            { name: 'Bootstrap' },
            { name: 'CSS' },
          ],
        },
        {
          name: 'OfficeOnTime',
          companyName: 'JoomSoft',
          description: 'System rezerwacji pomieszczeń on-line',
          from: '2013-06-01',
          to: '2014-01-30',
          role: 'Główny programista WEB (PHP)',
          responsibilities: [
            'Implementacja funkcjolaności systemu zgodnie z wymaganiami',
          ],
          usedSkills: [
            { name: 'PHP' },
            { name: 'Yii 1' },
            { name: 'PostgreSQL' },
            { name: 'Bootstrap' },
            { name: 'CSS' },
          ],
        },
        {
          name: 'BooksOn',
          companyName: 'Estymator',
          description:
            'Implementacja dedykowanej platformy do prowadzenia księgarni internetowej. Implementacja systemu BackOffice oraz aplikacji frontend dla Klientów księgarni',
          to: '2012-12-30',
          from: '2010-01-01',
          role: 'Programista WEB',
          responsibilities: [
            'Samodzielny programista implementujący funkcjonalności systemu zgodnie z oczekiwaniami Klienta',
            'Kontakt z Klientem',
            'Projektowanie i wdrażanie rozwiązań',
            'Wykonanie projektu graficznego oraz technicznego wraz z implementacją',
            'Przygotowanie zaawansowanego, dedykowanego systemu CMS do zarządzania i prowadzenia sprzedaży',
            'Wdrożenie płatności internetowych eCard',
            'Mechanizm masowej wysyłki wiadomości e-mail oraz rozbudowany moduł partnerski.',
            'Implementacja aplikacji BackOffice oraz aplikacji frontend dla Klientów',
          ],
          usedSkills: [
            { name: 'PHP' },
            { name: 'Yii 1' },
            { name: 'CSS' },
            { name: 'Bootstrap' },
            { name: 'MySQL' },
          ],
        },
      ],
    };

    return of(cvData);
  }
}
