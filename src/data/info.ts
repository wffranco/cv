import { formatExp } from "@/helpers";

type Salary = [period: 'hour' | 'month' | 'year', amount: number];

export const info = {
  about: [
    `Software Engineer and Technical Consultant with ${formatExp('2010-09')} of experience, delivering tailored web solutions to international clients. Skilled in guiding technical architecture, implementing modern workflows, and fostering long-term client partnerships. Proven ability to collaborate effectively with distributed teams across multiple time zones.`,
    'Specialized in modern JavaScript/TypeScript ecosystems (Vue.js, React, Angular) and PHP frameworks (Laravel, CodeIgniter), with hands-on experience in technical migrations, performance optimization, and solution architecture. Industry exposure spans FinTech, Government, and SaaS platforms.',
    'Demonstrated success in reducing development cycles while maintaining high code quality through CI/CD pipelines and test-driven development practices.'
  ],
  expectations: [
    'I\'m constantly improving my stack or learning new technologies, so I look for a place where that effort is valued, with opportunities for professional growth, a positive work environment and a competitive salary.',
  ],
  email: 'willemffrancoc@gmail.com',
  location: 'Medellín, Antioquia, Colombia 🇨🇴',
  name: 'Willem Franco',
  nationalities: [
    '🇪🇸 Spanish',
    '🇻🇪 Venezuelan',
  ],
  phone: '+573505942772',
  salaries: [
    ['month', 4000],
    ['hour', 23],
    ['year', 48000],
  ] as Salary[],
  independent: {
    mode: 'Part Time - On Demand',
    location: 'Medellín, Antioquia, Colombia',
    position: 'Senior Software Engineer & Technical Consultant',
    description: 'Independent consultant providing technical leadership and development services. Design and develop custom web solutions for international clients, provide technical architecture consultation and best practices guidance, implement modern development workflows and quality assurance processes. Collaborate with distributed teams across different time zones.',
  },
};

export default info;
