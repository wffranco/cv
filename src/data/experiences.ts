import { dateDiff, formatDate } from "../helpers";

interface Experience {
  company: string;
  mode: string;
  location: string;
  position: string;
  from: string;
  to?: string;
  description: string;
  period?: string;
}

const experiences: Experience[] = [
  {
    company: 'Websarrollo C.A.',
    mode: 'Presential',
    location: 'Valencia, Carabobo, Venezuela',
    position: 'Web Administrator',
    from: '2010-07',
    to: '2015-06',
    description: 'Worked as a full-stack developer in a team of 5 people. I was responsible for the development of a social network (Pure PHP, jQuery) for a client in the United States. I also worked on the mobile application for the same client (android, cordova/phonegap) and manage servers (AWS). Lastly I worked on the development on other projects related with warehouse management and e-commerce (codeigniter, laravel, angular 1, vue).',
  },
  {
    company: 'Alcaldía de Valencia',
    mode: 'Presential',
    location: 'Valencia, Carabobo, Venezuela',
    position: 'Development Analyst II',
    from: '2016-01',
    to: '2018-04',
    description: 'Worked as a full-stack developer together with 20 people. I developed 3 new products and maintained 4 legacy systems (Pure PHP, Vue, jQuery), helped in infrastructure decisions (linux servers), supported the dba team in the database design (Oracle DB), and started a main project (laravel) with embeded sub-applications (laravel-modules, laravel-blade, vue).',
  },
  {
    company: 'Alphas Technology',
    mode: 'Presential',
    location: 'Valencia, Carabobo, Venezuela',
    position: 'Web Developer',
    from: '2018-05',
    to: '2019-01',
    description: 'Worked as a full-stack developer in a team of 10 people. I worked on multiple projects for clients in Colombia, Spain, Chile, Argentina, and Venezuela, mostly working on backend projects in php or node, and frontend projects in angular, react, or vue.',
  },
  {
    company: 'Webkreativo',
    mode: 'Presential',
    location: 'Bogotá D.C., Colombia',
    position: 'Fullstack Developer',
    from: '2019-02',
    to: '2019-05',
    description: 'Worked as a full-stack developer in a team of 3 people, responsible for implementing new features and fixing bugs in a Codeigniter web application for a client in the United States. Also supporting a couple of WordPress websites.',
  },
  {
    company: 'Stradata AML',
    mode: 'Presential',
    location: 'Medellín, Antioquia, Colombia',
    position: 'Senior Web Developer',
    from: '2019-06',
    to: '2020-08',
    description: 'Worked as a full-stack developer in a team of 10+ people. I was responsible for the development of a new version of the frontend application (Vue) for an AML system, optimize the database (MySQL) and addind new modules in the backend (Codeigniter). Also fixing bugs, scrapping data from websites, and developing new features in other internal tools (Codeigniter, Laravel, Python in AWS Lambda, and more).',
  },
  {
    company: 'Blankfactor',
    mode: 'Hybrid',
    location: 'Medellín, Antioquia, Colombia',
    position: 'Senior Software Developer',
    from: '2021-02',
    to: '2022-12',
    description: 'Worked as a full-stack developer in different projects and teams. Worked with different technologies and frameworks, like Express, Laravel, Codeigniter, Vue.js, React, and Angular. I helped with a php migration for v5 to v7, helping with the movile app (Flutter), adding a new module (vue 3), and applying tests and code coverage (SonarQube) for a client in the United States.',
  },
  {
    company: 'Postindustria',
    mode: 'Remote',
    location: 'Medellín, Antioquia, Colombia',
    position: 'Senior Software Developer',
    from: '2023-07',
    description: 'Working as a full-stack developer for USA clients. Responsible for a frontend migration from vue 2 to vue 3 and adding some new modules in the same project; and starting a new application (Laravel, vue).',
  },
  {
    company: 'Freelancer',
    mode: 'Part Time - On Demand',
    location: 'Medellín, Antioquia, Colombia',
    position: 'Senior Software Developer',
    from: '2020-08',
    description: 'Working as a full-stack developer in a team of 3 people. I am responsible for the development of web applications for clients around the world, depending on my availability.',
  },
].map(({ from, period, to, ...exp }: Experience): Experience => ({
  ...exp,
  from,
  period: from ? `${formatDate(from)} - ${to ? formatDate(to) : 'Present'}` : period,
})).sort((a, b) => dateDiff(b.from, a.from));

export default experiences;
