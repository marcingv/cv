import { CvData, EN_LANG_CODE } from '../domain';

export const EN_CV: CvData = {
  lang: EN_LANG_CODE,
  employee: {
    firstName: 'Marcin',
    lastName: 'Gawski',
    specialization: 'Angular Developer',
    about:
      'I am a WEB developer with over 10 years of professional experience. For many years, I worked as a fullstack developer, using various backend and frontend frameworks. Over the past few years, I have been focusing mainly on working as an Angular developer. My priority is high code quality, which I achieve by applying good programming practices such as SOLID, KISS, DRY, CleanCode. I am also an advocate of continuous integration and containerization. In my future work, I am looking for opportunities for development and a chance to work with other experienced developers.',
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
      { name: 'CI/CD', category: 'tests' },
      { name: 'Unit', category: 'tests' },
      { name: 'E2E', category: 'tests' },
      { name: 'Jest', category: 'tests' },
      { name: 'Jasmine & Karma', category: 'tests' },
      { name: 'Cypress', category: 'tests' },
      { name: 'Prettier', category: 'frontend' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'PHP', category: 'backend' },
      { name: 'Symfony', category: 'backend' },
      { name: 'Yii & Yii2', category: 'backend' },
      { name: 'NestJS', category: 'backend' },
      { name: 'Codeception', category: 'tests' },
      { name: 'PHPUnit', category: 'tests' },
      { name: 'GIT' },
      { name: 'GitLab' },
      { name: 'GitHub' },
      { name: 'REST API', category: 'backend' },
      { name: 'Websockets', category: 'backend' },
      { name: 'SonarCube', category: 'tests' },
      { name: 'Linux' },
      { name: 'Windows' },
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
    additionalSkills: [{ name: "Driver's License Category B" }],
    contact: {
      city: 'Lublin',
      country: 'Poland',
      email: 'marcin.gawski@gmail.com',
      phone: '781 978 246',
      github: 'https://github.com/marcingv/cv',
      www: 'https://marcin.gawski.info',
    },
    hobbies: [
      { name: 'Billiards' },
      { name: 'Traveling' },
      { name: 'Video Editing' },
    ],
  },
  jobs: [
    {
      from: '2014-02-01',
      to: '2024-01-01',
      company: 'Lemisoft',
      description:
        'Worked as a senior fullstack developer using Angular, Symfony, Yii, and Yii2 frameworks. Designed system and application architectures. Led a team of developers. Ensured high code quality. Participated in both internal projects and outsourcing projects. During my time at Lemisoft, I implemented several large systems, currently used by thousands of users.',
      role: 'Fullstack WEB developer (Angular + Symfony)',
      usedSkills: [
        { name: 'Symfony' },
        { name: 'Angular' },
        { name: 'Docker' },
        { name: 'Git' },
        { name: 'GitLab' },
        { name: 'CI/CD' },
        { name: 'PostgreSQL' },
      ],
    },
    {
      from: '2013-04-01',
      to: '2014-02-01',
      company: 'JoomSoft',
      description:
        'Worked as a PHP and Android developer. Responsible for implementing key elements of internally developed applications and projects for external clients. Integrated with payment systems like PayU, PayPal, eCard. Created responsive web projects. Designed and implemented REST APIs for web and mobile applications. Developed an ORM library for the Android system.',
      role: 'Web & Android Developer',
      usedSkills: [
        { name: 'PHP' },
        { name: 'Yii 1 & 2' },
        { name: 'Android' },
        { name: 'PostgreSQL' },
      ],
    },
    {
      from: '2008-01-01',
      to: '2013-04-01',
      company: 'Freelancer',
      description:
        'Executed orders for individuals and companies. Orders involved comprehensive development of web and mobile applications for the Android platform, according to client expectations. Gained experience in creating advanced web and mobile applications, eCommerce systems, and integration with online payment systems.',
      role: 'Independent Freelancer',
      usedSkills: [
        { name: 'PHP' },
        { name: 'Yii' },
        { name: 'Android' },
        { name: 'CSS' },
        { name: 'REST API' },
        { name: 'MySQL' },
      ],
    },
  ],
  education: [
    {
      name: 'Maria Curie-Skłodowska University',
      from: '2008-01-01',
      to: '2013-01-01',
      description: 'Field: Computer Science, specialization: Computer Graphics',
    },
    {
      name: 'IX Copernicus High School in Lublin',
      from: '2005-01-01',
      to: '2008-01-01',
      description: 'Profile: language and IT',
    },
  ],
  projects: [
    {
      name: 'System for Clients of BNP Brokerage House',
      description:
        'Frontend application for traders / clients of the BNP brokerage bank. Platform enabling trading in financial instruments listed on the GPW and foreign markets.',
      role: 'Senior Angular Developer',
      companyName: 'Sygnity',
      from: '2022-02-01',
      to: '2023-09-30',
      responsibilities: [
        'Lead programmer and leader of the frontend team.',
        'Application architecture design and implementation of critical functionalities.',
        'Ensure high application performance.',
        "Coordination of programmers' work.",
        'Ensure high code quality, code review, and unit testing.',
        'Collaboration with other programmer teams, UX designers, and QA department.',
      ],
      usedSkills: [
        { name: 'Angular 16' },
        { name: 'RxJS' },
        { name: 'NgRx' },
        { name: 'KendoUI' },
        { name: 'Unit Tests' },
        { name: 'Bootstrap' },
        { name: 'SASS' },
        { name: 'Highcharts' },
        { name: 'Websockets' },
        { name: 'CI' },
      ],
    },
    {
      name: 'System for Clients of Michael/Ström Brokerage House',
      description:
        'Frontend application for traders / clients of the Michael/Ström Brokerage House. Platform enabling trading in financial instruments listed on the GPW.',
      role: 'Angular Developer',
      companyName: 'Sygnity',
      from: '2018-02-01',
      to: '2021-09-27',
      responsibilities: [
        'Member of the frontend developers team.',
        'Development and modernization of application architecture.',
        'Implementation of new system functionalities.',
        'Maintenance of the system and bug fixing.',
        'Ensuring high product quality.',
        'Collaboration with backend, UX, and QA teams.',
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
      name: 'Electronic Services Platform for the Patent Office',
      description:
        'Design and implementation of the Electronic Services Platform for the Patent Office in Poland.',
      role: 'System Architect, PHP & Android Developer',
      companyName: 'Lemisoft',
      from: '2019-01-01',
      to: '2022-09-30',
      responsibilities: [
        'Platform architecture design, based on microservices.',
        'Creation of technical project of the platform with documentation.',
        'Implementation of the main module for handling patent applications (backend + frontend).',
        'Integration with systems: PayByNet, CRWDE, GUS, Profil Zaufany.',
        'Server administration.',
        'Coordination of work of various programmer teams.',
        'Ensuring high code quality, unit testing, continuous integration work.',
      ],
      usedSkills: [
        { name: 'Symfony 4' },
        { name: 'REST API' },
        { name: 'CI/CD' },
        { name: 'Unit & E2E Tests' },
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
        'System using augmented reality to support production processes in enterprises.',
      role: 'System Architect, PHP & Angular Developer',
      from: '2021-03-01',
      to: '2022-02-01',
      usedSkills: [
        { name: 'Symfony 5' },
        { name: 'PostgreSQL' },
        { name: 'RabbitMQ' },
        { name: 'HTTP SSE' },
        { name: 'Angular 13' },
        { name: 'Docker' },
        { name: 'CI/CD' },
        { name: 'Unit & E2E Tests' },
      ],
      responsibilities: [
        'System architecture design based on microservices.',
        'Design and implementation of REST API.',
        'Implementation of the module handling video connections between enterprise employees.',
        'Integrations: Mercure, Twillio',
        'Coordination of work between different programmer teams.',
      ],
    },
    {
      name: 'PIU Emp@tia - platform for social benefits applications',
      from: '2017-03-01',
      to: '2018-01-01',
      description:
        'Module implementation on the "PIU Emp@tia" platform for submitting social benefits applications (500+, Large Family Card, etc.).',
      companyName: 'Sygnity',
      role: 'Angular Developer / Team Leader',
      responsibilities: [
        'Frontend application architecture design, enabling parallel work of different programmer teams on a set of social benefits applications.',
        'Implementation of a set of interactive social benefits applications.',
        'Coordination of programmers teams work.',
      ],
      usedSkills: [
        { name: 'Angular 5' },
        { name: 'PrimeNg' },
        { name: 'Bootstrap' },
      ],
    },
    {
      name: 'Occupational Barometer',
      companyName: 'Lemisoft',
      from: '2015-06-01',
      to: '2016-03-31',
      description:
        'Maintenance and expansion of the "Occupational Barometer" application commissioned by the Voivodship Labor Office in Krakow.',
      role: 'WEB Developer (PHP)',
      responsibilities: [
        'Expansion of system functionalities according to client expectations.',
        'Preparation of a new visual layer of the application, in accordance with mockups.',
        'Refactoring and optimization of the application.',
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
      role: 'PHP & Android Developer',
      description: 'Advertising platform based on Beacon proximity sensors.',
      responsibilities: [
        'BackOffice application implementation.',
        'Implementation of REST API for the mobile application.',
        'Implementation of a native mobile application for the Android platform.',
      ],
      usedSkills: [{ name: 'PHP' }, { name: 'Yii' }, { name: 'Android' }],
    },
    {
      name: 'Nurseum - Medical Scheduler',
      companyName: 'Lemisoft',
      from: '2016-07-01',
      to: '2017-12-30',
      description:
        'Tool supporting daily work of nurses and settlements with Social Insurance Institution.',
      role: 'WEB Developer (PHP) & Android Developer',
      responsibilities: [
        'Implementation of key system functionalities.',
        'REST API development',
        'Implementation of a mobile application for the Android platform.',
        'Coordination of programmer work.',
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
    //   description: 'Online room reservation system',
    //   from: '2013-06-01',
    //   to: '2014-01-30',
    //   role: 'WEB Developer (PHP)',
    //   responsibilities: [
    //     'System functionality implementation according to requirements.',
    //     'Ensuring responsiveness on mobile devices.',
    //     'Integration with PayU and PayPal payment systems.',
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
        "Dedicated platform for running an online bookstore, implemented according to client's requirements.",
      to: '2015-10-01',
      from: '2010-01-01',
      role: 'WEB Developer',
      responsibilities: [
        'BackOffice system implementation for order handling, shipping process automation, and inventory monitoring.',
        'Preparation of an advanced, dedicated CMS system for managing and conducting sales.',
        'Implementation of frontend application for store customers.',
        'Integration with eCard online payments platform.',
        'Integration with the Polish Post API.',
        'Mass email sending mechanism and extensive partner module.',
        'Continuous contact and consultations with the client.',
        'Preparation of application graphic design.',
      ],
      usedSkills: [
        { name: 'PHP' },
        { name: 'Yii' },
        { name: 'CSS' },
        { name: 'Bootstrap' },
        { name: 'MySQL' },
      ],
    },
    {
      name: 'SSRMZ - Statistics System for the Ministry of Health Resort',
      description:
        'Maintenance and development of the SSRMZ platform - a reporting system responsible for collecting and processing statistical data of facilities related to the healthcare sector in Poland.',
      role: 'PHP Developer',
      companyName: 'Lemisoft',
      from: '2014-02-01',
      to: '2016-02-30',
      responsibilities: [
        'Maintenance and development of the system.',
        'Implementation of a report form wizard.',
        'Bug fixing and customer support.',
        'Application and SQL query performance optimization.',
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
    { name: 'Polish', advancementDescription: 'Native language' },
    {
      name: 'English',
      advancementDescription: 'Level B2 (upper-intermediate)',
    },
  ],
  courses: [
    {
      platform: 'oracle',
      name: 'Oracle Database SQL Certified Expert',
      date: '2014-01-31',
      certFileUrl:
        'https://marcin.gawski.info/assets/files/oracle_sql_expert.pdf',
    },
    {
      platform: 'oracle',
      name: 'Oracle Database 11g Administrator Certified Associate',
      date: '2014-01-31',
      certFileUrl:
        'https://marcin.gawski.info/assets/files/oracle_administrator.pdf',
    },
    {
      platform: 'udemy',
      name: 'Cypress End-to-End Testing - Getting Started',
      date: '2024-01-03',
      certFileUrl:
        'https://marcin.gawski.info/assets/files/cypress-end-to-end-testing-certificate.pdf',
    },
    {
      platform: 'udemy',
      name: 'Docker & Kubernetes: The Practical Guide',
      date: '2024-01-09',
      certFileUrl:
        'https://marcin.gawski.info/assets/files/docker-&-kubernetes-certificate.pdf',
    },
    {
      platform: 'udemy',
      name: 'GitHub Actions - The Complete Guide',
      date: '2024-03-05',
      certFileUrl:
        'https://marcin.gawski.info/assets/files/github-actions-certificate.pdf',
    },
    {
      platform: 'udemy',
      name: 'JavaScript - The Complete Guide',
      date: '2024-02-14',
      certFileUrl:
        'https://marcin.gawski.info/assets/files/JavaScript-the-complete-guide-certificate.pdf',
    },
    {
      platform: 'udemy',
      name: 'Master NestJS a Node.js Framework',
      date: '2024-02-17',
      certFileUrl:
        'https://marcin.gawski.info/assets/files/master-nestjs-certificate.pdf',
    },
    {
      platform: 'udemy',
      name: 'NgRx (with NgRx Data) - The Complete Guide',
      date: '2022-02-18',
      certFileUrl:
        'https://marcin.gawski.info/assets/files/ngrx-the-complete-guide-certificate.pdf',
    },
    {
      platform: 'udemy',
      name: 'Understanding TypeScript',
      date: '2023-12-14',
      certFileUrl:
        'https://marcin.gawski.info/assets/files/understanding-typescript-certificate.pdf',
    },
  ],
  consents: {
    RODO: 'I consent to the processing of my personal data for the purpose of recruitment for the position I am applying for.',
  },
};
