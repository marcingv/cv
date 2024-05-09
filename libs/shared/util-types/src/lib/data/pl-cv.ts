import { CvData, PL_LANG_CODE } from '../domain';

export const PL_CV: CvData = {
  lang: PL_LANG_CODE,
  employee: {
    firstName: 'Marcin',
    lastName: 'Gawski',
    specialization: 'Programista Angular',
    about:
      'Jestem programistą WEB z ponad 10-letnim doświadczeniem zawodowym. Przez wiele lat pracowałem jako fullstack developer, wykorzystując różne frameworki backendowe oraz frontendowe. Przez ostatnie lata skupiam się na pracy głównie jako programista Angular. Priorytetem dla mnie jest wysoka jakość kodu, którą osiągam dzięki stosowaniu dobrych praktyk programowania, takich jak SOLID, KISS, DRY, CleanCode. Jestem również zwolennikiem pracy w trybie ciągłej integracji oraz konteneryzacji. W przyszłej pracy poszukuję możliwości rozwoju oraz szansy pracy z innymi doświadczonymi developerami, od których mógłbym wiele się nauczyć.',
    skills: [
      { name: 'Angular', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'JavaScript', category: 'frontend' },
      { name: 'Nx Workspace', category: 'frontend' },
      { name: 'RxJS', category: 'frontend' },
      { name: 'NgRX', category: 'frontend' },
      { name: 'PrimeNg', category: 'frontend' },
      { name: 'KendoUI', category: 'frontend' },
      { name: 'Bootstrap', category: 'frontend' },
      { name: 'CSS & SASS', category: 'frontend' },
      { name: 'Jest', category: 'frontend' },
      { name: 'Jasmine & Karma', category: 'frontend' },
      { name: 'Cypress', category: 'frontend' },
      { name: 'Prettier', category: 'frontend' },
      { name: 'Docker' },
      { name: 'PHP', category: 'backend' },
      { name: 'Symfony', category: 'backend' },
      { name: 'Yii & Yii2', category: 'backend' },
      { name: 'Codeception', category: 'backend' },
      { name: 'PHPUnit', category: 'backend' },
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
    additionalSkills: [{ name: 'Prawo jazdy kategorii B' }],
    contact: {
      city: 'Lublin',
      country: 'Polska',
      email: 'marcin.gawski@gmail.com',
      phone: '781 978 246',
      github: 'https://github.com/marcingv/cv',
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
      to: '2023-12-31',
      company: 'Lemisoft',
      description:
        'Praca na stanowisku senior fullstack developer z wykorzystaniem frameworków: Angular, Symfony, Yii, Yii2. Projektowanie architektury systemów i aplikacji. Kierowanie zespołem programistów. Dbanie o wysoką jakość kodu. Udział zarówno w projektach wewnętrznych oraz zewnętrznych na zasadzie outsourcingu. Podczas pracy w firmie Lemisoft zrealizowałem kilka dużych systemów, wykorzystywanych obecnie przez tysiące użytkowników.',
      role: 'Fullstack WEB developer (Angular + Symfony)',
      usedSkills: [
        { name: 'Symfony' },
        { name: 'Angular' },
        { name: 'Docker' },
        { name: 'Git' },
        { name: 'GitLab' },
        { name: 'CI / CD' },
        { name: 'PostgreSQL' },
      ],
    },
    {
      from: '2013-04-01',
      to: '2014-01-30',
      company: 'JoomSoft',
      description:
        'Praca jako programista PHP oraz Android. Odpowiedzialny za implementację kluczowych elementów aplikacji realizowanych wewnętrznie oraz na zlecenie zewnętrznych Klientów. Integracje z systemami płatności PayU, PayPal, eCard. Tworzenie responsywnych projektów stron internetowych. Projektowanie i implementacja REST API na potrzeby aplikacji WEB oraz aplikacji mobilnych. Stworzenie i rozwój biblioteki ORM dla systemu Android.',
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
        'Wykonywanie zleceń od osób prywatnych oraz firm. Zlecenia polegające na kompleksowym wykonywaniu aplikacji internetowych oraz mobilnych na platformę Android, zgodnie z oczekiwaniami Klienta. Zdobycie doświadczenia w zakresie tworzenia rozbudowanych aplikacji internetowych i mobilnych, systemów eCommerce oraz integracji z systemami płatności on-line.',
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
      name: 'Uniwersytet Marii Curie-Skłodowskiej',
      from: '2008-01-01',
      to: '2013-01-01',
      description: 'Kierunek: Informatyka, specjalizacja grafika komputerowa',
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
      name: 'System dla klientów Domu Maklerskiego BNP',
      description:
        'Aplikacja frontend dla traderów / klientów domu maklerskiego banku BNP. Platforma umożliwiająca handlowanie instrumentami finansowymi notowanymi na GPW oraz na rynkach zagranicznych.',
      role: 'Senior Angular Developer',
      companyName: 'Sygnity',
      from: '2022-02-01',
      to: '2023-09-30',
      responsibilities: [
        'Główny programista i lider zespołu frontendowego.',
        'Projekt architektury aplikacji oraz implementacja krytycznych funkcjonalności.',
        'Zapewnienie wysokiej wydajności aplikacji.',
        'Koordynacja prac programistów.',
        'Dbanie o wysoką jakość kodu, codereview i testy automatyczne.',
        'Współpraca z innymi zespołami programistów, projektantami UX oraz działem QA.',
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
        { name: 'CI' },
      ],
    },
    {
      name: 'System dla klientów Domu Maklerskiego Michael/Ström',
      description:
        'Aplikacja frontend dla traderów / klientów Domu Maklerskiego Michael/Ström. Platforma umożliwiająca handlowanie instrumentami finansowymi notowanymi na GPW.',
      role: 'Angular Developer',
      companyName: 'Sygnity',
      from: '2018-02-01',
      to: '2021-09-27',
      responsibilities: [
        'Członek zespołu programistów frontend.',
        'Rozwój i unowocześnienie architektury aplikacji.',
        'Implementacja nowych funkcjonalności systemu.',
        'Utrzymanie systemu i naprawa błędów.',
        'Dbałość o wysoką jakość produktu.',
        'Współpraca z zespołami: backend, UX oraz QA.',
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
      from: '2019-01-01',
      to: '2022-09-30',
      responsibilities: [
        'Projekt architektury platformy, oparty o mikroserwisy.',
        'Utworzenie projektu technicznego platformy wraz z dokumentacją.',
        'Implementacja głównego modułu do obsługi zgłoszeń patentowych (backend + frontend).',
        'Integracje z systemami: PayByNet, CRWDE, GUS, Profil Zaufany.',
        'Administracja serwerami.',
        'Koordynacja prac różnych zespołów programistów.',
        'Dbanie o wysoką jakość kodu, testy automatyczne, praca w trybie ciągłej integracji.',
      ],
      usedSkills: [
        { name: 'Symfony 4' },
        { name: 'REST API' },
        { name: 'CI / CD' },
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
        'System wykorzystujący rozszerzoną rzeczywistość do wspierania procesów produkcji w przesiębiorstwach.',
      role: 'Architekt systemu, Programista PHP, Programista Angular',
      from: '2021-03-01',
      to: '2022-02-01',
      usedSkills: [
        { name: 'Symfony 5' },
        { name: 'PostgreSQL' },
        { name: 'RabbitMQ' },
        { name: 'HTTP SSE' },
        { name: 'Angular 13' },
        { name: 'Docker' },
        { name: 'CI / CD' },
      ],
      responsibilities: [
        'Projekt architektury systemu w oparciu o mikroserwisy.',
        'Projektowanie i implementacja REST API.',
        'Implementacja modułu obsługującego połączenia wideo pomiędzy pracowanikami przesiębiorstwa.',
        'Integracje: Mercure, Twillio',
        'Koordynacja prac pomiędzy różnymi zespołami programistów.',
      ],
    },
    {
      name: 'PIU Emp@tia - platforma z wnioskami o świadczenia socjalne',
      from: '2017-03-01',
      to: '2018-01-01',
      description:
        'Implementacja modułu na platformie "PIU Emp@tia" do składania wniosków o świadczenia socjalne (500+, Karta Dużej Rodziny, itp).',
      companyName: 'Sygnity',
      role: 'Programista Angular / Team Leader',
      responsibilities: [
        'Projekt architektury aplikacji frontend, umożliwiający równoległą pracę różnych zespołów programistów nad zestawem wniosków o świadczenia socjalne.',
        'Implementacja zestawu interaktywnych wniosków o świadczenia.',
        'Koordynacja prac zespołów programistów.',
      ],
      usedSkills: [
        { name: 'Angular 5' },
        { name: 'PrimeNg' },
        { name: 'Bootstrap' },
      ],
    },
    {
      name: 'Barometr Zawodów',
      companyName: 'Lemisoft',
      from: '2015-06-01',
      to: '2016-03-31',
      description:
        'Utrzymanie i rozbudowa aplikacji "Barometr Zawodów" na zlecenie Wojewódzkiego Urzędu Pracy w Krakowie',
      role: 'Programista WEB (PHP)',
      responsibilities: [
        'Rozbudowa funkcjonalności systemu zgodnie z oczekiwaniami Klienta.',
        'Przygotowanie nowej warstwy wizualnej aplikacji, zgodnej z makietami.',
        'Refaktoryzacja i optymalizacja aplikacji.',
      ],
      usedSkills: [
        { name: 'PHP' },
        { name: 'Yii' },
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
      description: 'Platforma reklamowa oparta o czujniki zbliżeniowie Beacon.',
      responsibilities: [
        'Implementacja aplikacji BackOffice.',
        'Implementacja REST API na potrzeby aplikacji mobilnej.',
        'Implementacja natywnej aplikacji mobilnej dla platformy Android.',
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
      role: 'Programista WEB (PHP) & Android',
      responsibilities: [
        'Implementacja kluczowych funkcjonalności systemu.',
        'Rozwój REST API',
        'Implementacja aplikacji mobilnej dla platformy Android.',
        'Koordynacja prac programistów.',
      ],
      usedSkills: [
        { name: 'PHP' },
        { name: 'Yii 2' },
        { name: 'PostgreSQL' },
        { name: 'Bootstrap' },
        { name: 'CSS' },
        { name: 'Android' },
      ],
    },
    // {
    //   name: 'OfficeOnTime',
    //   companyName: 'JoomSoft',
    //   description: 'System rezerwacji pomieszczeń on-line',
    //   from: '2013-06-01',
    //   to: '2014-01-30',
    //   role: 'Programista WEB (PHP)',
    //   responsibilities: [
    //     'Implementacja funkcjolaności systemu zgodnie z wymaganiami.',
    //     'Zapewnienie responsywności na urządzeniach mobilnych.',
    //     'Integracja z systemami płatności PayU i PayPal.',
    //   ],
    //   usedSkills: [
    //     { name: 'PHP' },
    //     { name: 'Yii' },
    //     { name: 'PostgreSQL' },
    //     { name: 'Bootstrap' },
    //     { name: 'CSS' },
    //   ],
    // },
    {
      name: 'BooksOn',
      companyName: 'Estymator',
      description:
        'Dedykowana platforma do prowadzenia księgarni internetowej, zrealizowana na zamówienie Klienta.',
      to: '2015-10-01',
      from: '2010-01-01',
      role: 'Programista WEB',
      responsibilities: [
        'Implementacja systemu BackOffice do obsługi zamówień, automatyzacji procesów wysyłki oraz nadzorowania stanów magazynowych.',
        'Przygotowanie zaawansowanego, dedykowanego systemu CMS do zarządzania i prowadzenia sprzedaży.',
        'Implementacja aplikacji frontend dla Klientów księgarni.',
        'Wdrożenie płatności internetowych eCard',
        'Integracja z API Poczty Polskiej.',
        'Mechanizm masowej wysyłki wiadomości e-mail oraz rozbudowany moduł partnerski.',
        'Stały kontakt i konsultacje z Klientem.',
        'Przygotowanie projektu graficznego aplikacji.',
      ],
      usedSkills: [
        { name: 'PHP' },
        { name: 'Yii 1' },
        { name: 'CSS' },
        { name: 'Bootstrap' },
        { name: 'MySQL' },
      ],
    },
    {
      name: 'SSRMZ - System Statystyki Resortu Ministra Zdrowia',
      description:
        'Utrzymanie i rozwój platformy SSRMZ - systemu raportowego, odpowiedzialnego za gromadzenie i opracowywanie danych statystycznych placówek związanych z sektorem ochrony zdrowia w Polsce.',
      role: 'Programista PHP',
      companyName: 'Lemisoft',
      from: '2014-02-01',
      to: '2016-02-30',
      responsibilities: [
        'Utrzymanie i rozwój systemu.',
        'Implementacja kreatora formularzy raportowych.',
        'Naprawa błędów i obsługa zgłoszeń od Klienta.',
        'Optymalizacja wydajności aplikacji i zapytań SQL.',
      ],
      usedSkills: [
        { name: 'Yii' },
        { name: 'PostgreSQL' },
        { name: 'jQuery' },
        { name: 'Bootstrap' },
        { name: 'LESS' },
      ],
    },
  ],
  languages: [
    { name: 'Polski', advancementDescription: 'Język ojczysty' },
    { name: 'Angielski', advancementDescription: 'Poziom komunikatywny' },
  ],
  consents: {
    RODO: 'Wyrażam zgodę na przetwarzanie moich danych osobowych w celu prowadzenia rekrutacji na aplikowane przeze mnie stanowisko.',
  },
};
