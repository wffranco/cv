import { experiences, type Experience } from '@/data/experiences';
import { educations, type Education } from '@/data/education';
import habilities from '@/data/habilities';
import info, { type Independent } from '@/data/info';
import languages from '@/data/languages';
import { wrapper } from './arrays';

const generateLatexPreamble = () => `
\\documentclass[11pt,a4paper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage{geometry}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fontawesome}
\\usepackage{titlesec}
\\usepackage{enumitem}
\\usepackage{tabularx}
\\usepackage{array}
\\usepackage{xcolor}

\\geometry{
  top=1.5cm,
  bottom=1.5cm,
  left=2cm,
  right=2cm
}

\\hypersetup{
  colorlinks=true,
  linkcolor=blue,
  filecolor=magenta,
  urlcolor=blue
}

\\definecolor{gray}{RGB}{100,100,100}

\\titleformat{\\section}{\\Large\\bfseries}{\\thesection}{1em}{}[\\titlerule]
\\titlespacing*{\\section}{0pt}{12pt}{6pt}

\\newcommand{\\skill}[2]{#1 & #2 \\\\}

\\begin{document}
`.trim();

const generateHeader = () => `
\\begin{center}
  {\\Huge\\textbf{Willem Franco}}\\\\[0.3em]
  {\\Large\\textcolor{gray}{Senior Full-Stack Software Engineer}}\\\\[0.5em]
  \\faMapMarker\\ Medellín, Antioquia, Colombia \\\\
  \\faPhone\\ +573505942772 \\\\
  \\faEnvelope\\ willemffrancoc@gmail.com \\\\
  \\faGithub\\ \\href{https://github.com/wffranco}{github.com/wffranco} \\\\
  \\faLinkedin\\ \\href{https://linkedin.com/in/wffranco}{linkedin.com/in/wffranco}
\\end{center}`.trim();

function generateSkillsSection() {
  const sections = [
    { title: 'Programming Languages', items: habilities.languages.items },
    { title: 'Frameworks & Libraries', items: habilities.frameworks.items },
    {
      title: 'Frontend Technologies', items: habilities.general.items.filter(item =>
        ['Front-End Development'].includes(item.name))
    },
    { title: 'Databases', items: habilities.databases.items },
    { title: 'DevOps & Tools', items: habilities.tools.items },
    { title: 'Methodologies & Concepts', items: habilities.others.items },
  ];

  return sections.map(section => `
\\subsection*{${section.title}}
\\begin{tabularx}{\\textwidth}{X r}
${section.items.map(item => `\\skill{${item.name}}{${formatExperience(item.experience)}}`).join('\n')}
\\end{tabularx}
`.trim()).join('\n');
}

function formatExperience(exp: string | number): string {
  if (typeof exp === 'string') {
    // Si es una fecha en formato YYYY-MM, calcular años desde esa fecha
    const [year, month] = exp.split('-').map(Number);
    const now = new Date();
    let years = now.getFullYear() - year;
    if (month && now.getMonth() + 1 < month) years--;
    return `${years}+ years`;
  }
  // Si es un número, asumimos que ya está en años
  return `${exp} years${exp === 1 ? '' : 's'}`;
}

const generateExperienceSection = (exp: Experience | Independent) => `
\\noindent\\textbf{${exp.position}} \\hfill ${!exp?.from
    ? 'On Demand'
    : `${exp?.from.split('-')[0]} - ${exp?.to ? exp?.to.split('-')[0] : 'Present'}`
  }\\\\
${exp?.company
    ? `\\noindent\\textit{${exp?.company}} -- ${exp.mode}, ${exp.location.split(',')[0]}\\\\`
    : `\\noindent\\textit{${exp.mode}, ${exp.location.split(',')[0]}}\\\\`}
${exp.description.includes(':') ? exp.description : `${exp.description}:`}
\\begin{itemize}[noitemsep]
  ${generateBulletPoints(wrapper(exp.description).join('\n'))}
\\end{itemize}
`.trim();

function generateBulletPoints(description: string): string {
  // Si la descripción ya tiene puntos, los usamos
  if (description.includes('\n-')) {
    return description
      .split('\n-')
      .filter(Boolean)
      .map(point => `\\item ${point.trim()}`)
      .join('\n  ');
  }

  // Si no, creamos un solo punto
  return `\\item ${description}`;
}

const generateEducationSection = (edu: Education) => `
\\noindent\\textbf{${edu.degree}} \\hfill ${edu.date}\\\\
\\noindent\\textit{${edu.institution}} -- ${edu.location}\\\\
Specialization: ${edu.description}
`.trim();

export const generateLatex = () => `
${generateLatexPreamble()}

${generateHeader()}

\\section*{Professional Summary}
Senior Full-Stack Engineer with 14+ years of expertise in designing and implementing scalable web applications. Specialized in modern JavaScript/TypeScript ecosystems (Vue.js, React, Angular) and PHP frameworks (Laravel, CodeIgniter). Proven track record in leading technical migrations, optimizing performance, and architecting solutions across diverse industries including FinTech, Government, and SaaS platforms. Demonstrated success in reducing development cycles while maintaining code quality through CI/CD implementation and test-driven development practices.

\\section*{Technical Skills}
${generateSkillsSection()}

\\section*{Languages}
\\begin{itemize}[noitemsep]
${languages.map(lang => `  \\item \\textbf{${lang.name}}`).join('\n')}
\\end{itemize}

\\section*{Independent Consulting & Project Work}
${generateExperienceSection(info.independent)}

\\section*{Professional Experience}
${experiences
    .filter(exp => exp.company !== 'Freelancer')
    .map(generateExperienceSection)
    .join('\n\n')}

\\section*{Education}
${educations.map(generateEducationSection).join('\n\n')}

\\end{document}
`.trim();
