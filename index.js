
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
    habilities: {
      general: {
        title: 'General Skills',
        items: [
          { name: 'Back-End Development', lvl: 4, experience: '2010-09' },
          { name: 'Front-End Development', lvl: 4.5, experience: '2010-09' },
          { name: 'Team Leader', lvl: 4, experience: 1.9 },
          { name: 'AWS', lvl: 3, experience: 1.1 },
        ].map(h => ({ ...h, experience: formatExp(h.experience) })),
      },
      databases: {
        title: 'Databases',
        items: [
          { name: 'MySql', lvl: 4.5, experience: '2010-09' },
          { name: 'PostgreSQL', lvl: 4, experience: 2.1 },
          { name: 'Microsoft SQL Server', lvl: 3.5, experience: 1.1 },
          { name: 'Oracle Database', lvl: 3.5, experience: 2.1 },
          { name: 'MongoDB', lvl: 4, experience: 4.1 },
        ].map(h => ({ ...h, experience: formatExp(h.experience) })),
      },
      languages: {
        title: 'Languages',
        items: [
          { name: 'PHP', lvl: 5, experience: '2010-09' },
          { name: 'HTML', lvl: 5, experience: '2010-09' },
          { name: 'CSS', lvl: 5, experience: '2010-09' },
          { name: 'JavaScript', lvl: 5, experience: '2010-09' },
          { name: 'Node.js', lvl: 4, experience: 2016 },
          { name: 'TypeScript', lvl: 4, experience: 2019 },
          { name: 'Go', lvl: 2.5, experience: 0.8 },
        ].map(h => ({ ...h, experience: formatExp(h.experience) })),
      },
      frameworks: {
        title: 'Frameworks',
        items: [
          { name: 'Laravel', lvl: 4, experience: '2015-03' },
          { name: 'Livewire', lvl: 3, experience: '2023-03' },
          { name: 'Vue.js', lvl: 5, experience: '2015-03' },
          { name: 'React', lvl: 4, experience: 2020 },
          { name: 'Angular.js', lvl: 4, experience: '2015-03' },
          { name: 'Angular', lvl: 4, experience: '2018-06' },
          { name: 'Astro', lvl: 3, experience: '2023-10' },
          { name: 'Nest.js', lvl: 3, experience: 0.8 },
        ].map(h => ({ ...h, experience: formatExp(h.experience) })),
      },
      tools: {
        title: 'Tools',
        items: [
          { name: 'Git', lvl: 4.5, experience: 2014 },
          { name: 'Docker', lvl: 4, experience: '2018-06' },
          { name: 'Jira', lvl: 3, experience: 2019 },
          { name: 'Figma', lvl: 3, experience: '2018-06' },
          { name: 'Postman', lvl: 4, experience: '2018-06' },
          { name: 'VSCode', lvl: 5, experience: 2016 },
        ].map(h => ({ ...h, experience: formatExp(h.experience) })),
      },
      others: {
        title: 'Others',
        items: [
          { name: 'SOLID', lvl: 4, experience: 2018 },
          { name: 'DRY', lvl: 4, experience: 2018 },
          { name: 'KISS', lvl: 4, experience: 2018 },
          { name: 'Design Patterns', lvl: 4, experience: 2018 },
          { name: 'TDD', lvl: 4, experience: 1.9 },
          { name: 'REST APIs', lvl: 4, experience: 2018 },
          { name: 'Microservices', lvl: 3, experience: 0.8 },
          { name: 'Scrum', lvl: 4, experience: 2.1 },
          { name: 'CI/CD', lvl: 3, experience: 0.8 },
          { name: 'GraphQL', lvl: 3, experience: 0.8 },
          { name: 'WebSockets', lvl: 3, experience: 2020 },
          { name: 'JWT', lvl: 3, experience: 2018 },
        ].map(h => ({ ...h, experience: formatExp(h.experience) })),
      },
    },
    info: {
      about: [
        `Web developer with ${formatExp('2010-09')} of experience. I am a proactive person, always looking for new challenges and learning new technologies.`,
        'I can implement complex ideas and developing high-level applications, having a diverse experience in different projects, including (but not limited to) social networks, hotel industry, and AML (Anti-Money Laundering) systems.',
        'I have a strong knowledge of PHP, JavaScript, and their frameworks, as well as experience with databases, cloud services, and other technologies.',
        'I was a team leader in some projects, and I have experience supporting on all stages of the software development life cycle.',
        'I am a team player, with good communication skills, trying to find the best solution for the problems that we face, always willing to help my teammates and sharing my knowledge or learning from them.',
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
      salary: {
        hour: 23,
        month: 4000,
        year: 48000,
      },
    },
    languages: [
      { name: 'Spanish (Native)', lvl: 5 },
      { name: 'English', lvl: 4 },
    ],
    links: [
      { name: 'CV Page', url: 'https://wffranco.github.io/cv/', logo: './imgs/cv.svg' },
      { name: 'GitHub', url: 'https://github.com/wffranco', logo: './imgs/github.svg' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/wffranco', logo: './imgs/linkedin.svg' },
      { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/willemfranco', logo: './imgs/hackerrank.svg' }, //logo: `data:image/svg+xml,%3Csvg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 256 256" style="enable-background:new 0 0 256 256;" xml:space="preserve"%3E%3Cstyle type="text/css"%3E .st0%7Bfill:%230E141E;%7D .st1%7Bfill:%23FFFFFF;%7D .st2%7Bfill:%2300EA64;%7D%0A%3C/style%3E%3Crect x="0" y="0" class='st0' width='256' height='256'/%3E%3Cg%3E%3Cpath class='st1' d='M125.39,85.35h-19.26c-0.65,0-1.18,0.53-1.18,1.18v30.61H84.2V86.54c0-0.65-0.53-1.18-1.18-1.18H63.76 c-0.65,0-1.18,0.53-1.18,1.18v82.85c0,0.65,0.53,1.18,1.18,1.18h19.26c0.65,0,1.18-0.53,1.18-1.18v-30.61h20.75v30.61 c0,0.65,0.53,1.18,1.18,1.18h19.26c0.65,0,1.18-0.53,1.18-1.18V86.54C126.57,85.88,126.04,85.35,125.39,85.35z'/%3E%3Cpath class='st2' d='M199.76,170.57h-61.64c-0.65,0-1.18-0.53-1.18-1.18V86.53c0-0.65,0.53-1.18,1.18-1.18h61.64 c0.65,0,1.18,0.53,1.18,1.18v82.85C200.94,170.04,200.41,170.57,199.76,170.57z'/%3E%3C/g%3E%3C/svg%3E%0A` },
    ],
    ...data,
  };
};

/** Format experience time */
function formatExp(value) {
  if (/^\d{4}$/.test(value)) {
    value += '-01';
  }
  if (/^\d{4}-\d{2}$/.test(value)) {
    value += '-01';
  }
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
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