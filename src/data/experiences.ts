import { dateDiff } from "@/helpers";

export interface Experience {
  company: string;
  mode: string;
  location: string;
  position: string;
  from: string;
  to?: string;
  description: string;
}

const experiences: Experience[] = [
  {
    company: 'Postindustria',
    mode: 'Remote',
    location: 'Medellín, Antioquia, Colombia',
    position: 'Senior Software Engineer',
    to: '2025-09',
    from: '2023-07',
    description: 'Lead Full-Stack Engineer for US-based enterprise applications. Spearheaded large-scale Vue 2 to Vue 3 migration while maintaining 100% application functionality. Architected and implemented new modular features, improving system scalability. Developed new full-stack applications using Laravel and Vue.js with modern best practices. Implemented automated testing strategies, achieving 80%+ code coverage.',
  },
  {
    company: 'Blankfactor',
    mode: 'Hybrid',
    location: 'Medellín, Antioquia, Colombia',
    position: 'Senior Software Engineer',
    to: '2022-12',
    from: '2021-02',
    description: 'Technical Lead for enterprise-level applications. Led successful PHP v5 to v7 migration for legacy system with zero downtime. Architected and developed cross-platform mobile application using Flutter. Implemented comprehensive testing strategy with SonarQube, achieving 90% code coverage. Mentored junior developers and established coding standards. Reduced deployment time by 40% through CI/CD pipeline optimization.',
  },
  {
    company: 'Rental Depot',
    mode: 'Remote',
    location: 'Medellín, Antioquia, Colombia',
    position: 'Senior Software Engineer',
    to: '2021-02',
    from: '2020-11',
    description: 'Led development of a modern equipment rental management platform. Architected and implemented full-stack solution using Laravel, Vue.js, and TailwindCSS. Delivered key features including real-time inventory tracking, automated booking system, and integrated payment processing. Established modern development practices and responsive design principles.',
  },
  {
    company: 'Stradata AML',
    mode: 'Presential',
    location: 'Medellín, Antioquia, Colombia',
    position: 'Senior Software Engineer',
    to: '2020-08',
    from: '2019-06',
    description: 'Technical Lead for Anti-Money Laundering (AML) system modernization. Architected and implemented new Vue.js frontend, improving user experience and reducing load times by 60%. Optimized MySQL database performance, reducing query execution time by 75%. Developed automated data collection system using AWS Lambda and Python. Implemented real-time monitoring system for suspicious transactions. Integrated multiple third-party financial APIs for enhanced data verification.',
  },
  {
    company: 'Webkreativo',
    mode: 'Presential',
    location: 'Bogotá D.C., Colombia',
    position: 'Senior Software Engineer',
    to: '2019-05',
    from: '2019-02',
    description: 'Key developer in a strategic team enhancing US-client web applications. Implemented critical feature updates and performance optimizations for CodeIgniter-based enterprise system. Managed and optimized multiple WordPress platforms, improving site performance and security. Introduced automated testing procedures reducing bug regression by 40%.',
  },
  {
    company: 'Alphas Technology',
    mode: 'Presential',
    location: 'Valencia, Carabobo, Venezuela',
    position: 'Software Engineer',
    to: '2019-01',
    from: '2018-05',
    description: 'Full-stack engineer in an international development team serving clients across Latin America and Europe. Developed and deployed multiple backend solutions using PHP and Node.js. Implemented modern frontend applications using Angular, React, and Vue.js. Established cross-cultural communication protocols improving project delivery efficiency by 25%.',
  },
  {
    company: 'Alcaldía de Valencia',
    mode: 'Presential',
    location: 'Valencia, Carabobo, Venezuela',
    position: 'Development Analyst II',
    to: '2018-04',
    from: '2016-01',
    description: 'Full-stack developer in a large-team environment. Developed 3 new products and maintained 4 legacy systems. Led infrastructure decisions for Linux servers. Supported database design team (Oracle DB). Architected main project using Laravel with modular sub-applications.',
  },
  {
    company: 'Websarrollo C.A.',
    mode: 'Presential',
    location: 'Valencia, Carabobo, Venezuela',
    position: 'Web Administrator',
    to: '2015-06',
    from: '2010-07',
    description: 'Full-stack developer role with diverse responsibilities. Developed social network platform for US client (PHP, jQuery). Created mobile application using Cordova/PhoneGap. Managed AWS server infrastructure. Built warehouse management and e-commerce solutions.',
  },
  {
    company: 'Freelancer',
    mode: 'Part Time - On Demand',
    location: 'Medellín, Antioquia, Colombia',
    position: 'Senior Software Engineer & Technical Consultant',
    from: '2020-08',
    description: 'Independent consultant providing technical leadership and development services. Design and develop custom web solutions for international clients, provide technical architecture consultation and best practices guidance, implement modern development workflows and quality assurance processes. Collaborate with distributed teams across different time zones.',
  },
].sort((a, b) => dateDiff(a.from, b.from));

export default experiences;
