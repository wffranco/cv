
window.loadData = (data = {}) => {
  const start = new Date('2010-09-01');
  const years = Math.floor((new Date() - start) / 1000 / 60 / 60 / 24 / 365.25);
  return {
    educations: [
      {
        degree: 'Higher University Technician in Computer Science (IT Development)',
        description: 'Software Developer & Database Manager',
        institution: 'Instituto Universitario de Tecnología Valencia',
        location: 'Carabobo, Venezuela',
        date: '2007',
      },
    ],
    experiences: [
      {
        company: 'Postindustria',
        mode: 'Remote',
        location: 'Medellín, Antioquia, Colombia',
        position: 'Senior Software Developer',
        period: 'Jul. 2023 - Present',
        description: 'Working as a full-stack developer in a team of 10 people. I am responsible for the development of a web application for a client in the United States. I am also working on the development of a mobile application for a client in Colombia.',
      },
      {
        company: 'Blankfactor',
        mode: 'Hybrid',
        location: 'Medellín, Antioquia, Colombia',
        position: 'Senior Software Developer',
        period: 'Feb. 2021 - Dic. 2022',
        description: 'Worked as a full-stack developer in a team of 5 people. I was responsible for the development of the frontend and backend of a web application for a client in the United States. I also worked on the development of a mobile application for a client in Colombia.',
      },
      {
        company: 'Stradata AML',
        mode: 'Presential',
        location: 'Medellín, Antioquia, Colombia',
        position: 'Senior Web Developer',
        period: 'Jun. 2019 - Ago. 2020',
        description: 'Worked as a full-stack developer in a team of 10 people. I was responsible for the development of a web application for a client in the United States. I also worked on the development of a mobile application for a client in Colombia.',
      },
      {
        company: 'Webkreativo',
        mode: 'Presential',
        location: 'Bogotá D.C., Colombia',
        position: 'Fullstack Developer',
        period: 'Feb. 2019 - May. 2019',
        description: 'Worked as a full-stack developer in a team of 5 people. I was responsible for the development of the frontend and backend of a web application for a client in the United States. I also worked on the development of a mobile application for a client in Colombia.',
      },
      {
        company: 'Alphas Technology',
        mode: 'Presential',
        location: 'Valencia, Carabobo, Venezuela',
        position: 'Web Developer',
        period: 'May. 2018 - Ene. 2019',
        description: 'Worked as a full-stack developer in a team of 10 people. I was responsible for the development of a web application for a client in the United States. I also worked on the development of a mobile application for a client in Colombia.',
      },
      {
        company: 'Alcaldía de Valencia',
        mode: 'Presential',
        location: 'Valencia, Carabobo, Venezuela',
        position: 'Development Analyst II',
        period: 'Ene. 2016 - Abr. 2018',
        description: 'Worked as a full-stack developer in a team of 5 people. I was responsible for the development of the frontend and backend of a web application for a client in the United States. I also worked on the development of a mobile application for a client in Colombia.',
      },
      {
        company: 'Websarrollo C.A.',
        mode: 'Presential',
        location: 'Valencia, Carabobo, Venezuela',
        position: 'Web Administrator',
        period: 'Sep. 2010 - Jun. 2015',
        description: 'Worked as a full-stack developer in a team of 10 people. I was responsible for the development of a web application for a client in the United States. I also worked on the development of a mobile application for a client in Colombia.',
      },
    ],
    habilities: [
      { name: 'Front-End Development', lvl: 4.5, experience: '2010-09' },
      { name: 'Back-End Development', lvl: 4, experience: '2010-09' },
      { name: 'HTML', lvl: 5, experience: '2010-09' },
      { name: 'CSS', lvl: 5, experience: '2010-09' },
      { name: 'PHP', lvl: 5, experience: '2010-09' },
      { name: 'Laravel', lvl: 4, experience: '2015-03' },
      { name: 'JavaScript', lvl: 5, experience: '2010-09' },
      { name: 'TypeScript', lvl: 4, experience: '2019-01' },
      { name: 'Node.js', lvl: 4, experience: '2016-01' },
      { name: 'Vue.js', lvl: 5, experience: '2015-03' },
      { name: 'React', lvl: 4, experience: '2020-01' },
      { name: 'Angular.js', lvl: 4, experience: '2015-03' },
      { name: 'Angular', lvl: 4, experience: '2018-06' },
      { name: 'Astro', lvl: 3, experience: '2023-10' },
      { name: 'Go', lvl: 2.5, experience: 0.8 },
      { name: 'MySql', lvl: 4.5, experience: '2010-09' },
      { name: 'PostgreSQL', lvl: 4, experience: 2.1 },
      { name: 'Microsoft SQL Server', lvl: 3.5, experience: 1.1 },
      { name: 'Oracle Database', lvl: 3.5, experience: 2.1 },
      { name: 'MongoDB', lvl: 4, experience: 4.1 },
      { name: 'Git', lvl: 4.5, experience: '2014-01' },
      { name: 'Docker', lvl: 4, experience: '2018-06' },
    ].map(h => ({ ...h, experience: formatExp(h.experience) })),
    info: {
      about: [
        `Web developer with ${formatExp('2010-09')} of experience.`,
        'I can implement complex ideas and developing high-level applications, having a diverse experience in different projects, including (but not limited to) social networks, hotel industry, and AML (Anti-Money Laundering) systems.',
        'I keep myself updated with the languages, frameworks and tools I know, ensuring innovative and efficient solutions for every project.',
        'Located in Colombia, but open to relocation.'
      ],
      email: 'willemffrancoc@gmail.com',
      location: 'Medellín, Antioquia, Colombia 🇨🇴',
      name: 'Willem Franco',
      nationalities: [
        '🇪🇸 Spanish',
        '🇻🇪 Venezuelan',
      ],
      phone: '+573505942772',
    },
    languages: [
      { name: 'Spanish (Native)', lvl: 5 },
      { name: 'English', lvl: 4 },
    ],
    links: [
      { name: 'CV Page', url: 'https://wffranco.github.io/cv/' },
      { name: 'GitHub', url: 'https://github.com/wffranco' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/wffranco' },
      { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/willemfranco' },
    ],
    ...data,
  };
};

/** Format experience time */
function formatExp(value) {
  if (/\d{4}-\d{2}/.test(value)) {
    value += '-01';
  }
  if (/\d{4}-\d{2}-\d{2}/.test(value)) {
    const start = new Date(value);
    const now = new Date();
    value = (now - start) / 1000 / 60 / 60 / 24 / 365.25;
  }
  if (!isNaN(value)) {
    if (value > 3) return `${Math.floor(value)}+ years`;
    const years = Math.round(value);
    return `${years}${years < value ? '+' : '-'} years`;
  }
  return value;
}