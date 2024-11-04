interface Education {
  degree: string;
  description: string;
  institution: string;
  location: string;
  date: string | number;
}

const educations: Education[] = [
  {
    degree: 'Higher University Technician in Computer Science (IT Development)',
    description: 'Software Developer & Database Manager',
    institution: 'Instituto Universitario de Tecnología Valencia',
    location: 'Carabobo, Venezuela',
    date: '2007',
  },
];

export default educations;
