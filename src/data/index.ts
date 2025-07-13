import { NavItem, SocialLink, Experience, Project, Skill, Testimonial } from '../types';

export const navItems: NavItem[] = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Events', to: 'events' },
  { name: 'Skills', to: 'skills' },
  { name: 'Achievements', to: 'achievements' },
  { name: 'Contact', to: 'contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/', icon: 'Linkedin' },
  { name: 'GitHub', url: 'https://github.com/', icon: 'Github' },
  { name: 'Devfolio', url: 'https://devfolio.co/', icon: 'Globe' },
];

export const experiences: Experience[] = [
  {
    id: 'exp1',
    title: 'Chief Technical Officer',
    organization: 'RELEVENT\'25',
    period: '2023 - Present',
    description: [
      'Strategizing to develop 60 developers, designers, and makers by the end of 2025.',
      'Leading technical initiatives and fostering innovation within the organization.',
      'Coordinating with cross-functional teams to implement technical strategies.'
    ],
    tags: ['Leadership', 'Technical Strategy', 'Team Development']
  },
  {
    id: 'exp2',
    title: 'Vice-Chairperson',
    organization: 'CSI SB MBCET',
    period: '2022 - Present',
    description: [
      'Leading organizational initiatives and coordinating events.',
      'Managing team dynamics and fostering a collaborative environment.',
      'Representing the organization in inter-college events and competitions.'
    ],
    tags: ['Leadership', 'Event Management', 'Team Coordination']
  },
  {
    id: 'exp3',
    title: 'Membership Development Sub-Head',
    organization: 'IEEE SB MBCET',
    period: '2022 - Present',
    description: [
      'Developing strategies to increase and retain membership.',
      'Organizing workshops and sessions to enhance member skills.',
      'Creating engagement opportunities for members to participate in organizational activities.'
    ],
    tags: ['Membership Growth', 'Community Building', 'Engagement Strategies']
  },
  {
    id: 'exp4',
    title: 'Co-Lead',
    organization: 'MuLearn MBCET',
    period: '2022 - Present',
    description: [
      'Co-leading initiatives to foster learning and skill development.',
      'Organizing workshops and hackathons for practical learning experiences.',
      'Collaborating with industry professionals to bridge academic and professional gaps.'
    ],
    tags: ['Education', 'Skill Development', 'Community Building']
  },
  {
    id: 'exp5',
    title: 'Event Organizer',
    organization: 'Design: Unlocked 2025',
    period: '2023',
    description: [
      'Organized South Kerala\'s biggest college-based design bootcamp.',
      'Collaborated with industry experts to provide quality learning experiences.',
      'Managed logistics, participant engagement, and event execution.'
    ],
    tags: ['Event Management', 'Design', 'Collaboration']
  },
  {
    id: 'exp6',
    title: 'Project Lead',
    organization: 'RADIANCE\'24',
    period: '2023',
    description: [
      'Conceptualized and executed a community-building event for freshers.',
      'Handled planning, budgeting, and organizing of the entire event.',
      'Created engagement strategies to ensure participant satisfaction.'
    ],
    tags: ['Project Management', 'Community Building', 'Event Planning']
  },
  {
    id: 'exp7',
    title: 'Workshop Coordinator',
    organization: 'Game Development Workshop',
    period: '2023',
    description: [
      'Brought Unreal Engine workshops to fruition for students.',
      'Provided hands-on experience to participants in game development.',
      'Coordinated with instructors and managed workshop logistics.'
    ],
    tags: ['Workshop', 'Game Development', 'Technical Training']
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Calculator App',
    description: 'A basic calculator app with UI built using Tkinter. Implements mathematical functions with clean UX.',
    image: '/images/projects/calc.jpeg',
    tags: ['Python', 'UI/UX', 'Tkinter', 'Maths'],
    github: 'https://github.com/Vedha17Mahadevan/Scientific-Calculator',
    link: 'https://github.com/Vedha17Mahadevan/Scientific-Calculator'
  },
  {
    id: 2,
    title: 'Library Manager',
    description: 'Backend system to manage books and transactions using FastAPI.',
    image: '/images/projects/lib.jpg',
    tags: ['Python', 'FastAPI'],
    github: 'https://github.com/Vedha17Mahadevan/Library-Management',
    link: 'https://github.com/Vedha17Mahadevan/Library-Management'
  },
  {
    id: 3,
    title: 'Event Registration System',
    description: 'Java Swing based GUI app to handle user registration, login, and event participation. Connected with SQL DB.',
    image: '/images/projects/event.jpg',
    tags: ['Java', 'SQL', 'Java Swing'],
    github: 'https://github.com/Vedha17Mahadevan/Event-Registration-System-Java',
    link: 'https://github.com/Vedha17Mahadevan/Event-Registration-System-Java'
  },
  {
    id: 4,
    title: 'BMI Calculator',
    description: 'Web-based BMI calculator with responsive frontend.',
    image: '/images/projects/bmi.jpg',
    tags: ['HTML', 'CSS', 'JS'],
    github: 'https://github.com/Vedha17Mahadevan/BMI-Calculator',
    link: 'https://github.com/Vedha17Mahadevan/BMI-Calculator'
  },
  {
    id: 5,
    title: 'StreetSafe',
    description: 'An IoT hardware and simulation-based project for street surveillance and safety.',
    image: '/images/projects/streetSafe.png',
    tags: ['IoT Hardware', 'Simulation'],
    github: 'https://www.canva.com/design/DAGdMnZuNAQ/kwCnhujaYK8Kc97jpGSrgA/view?utm_content=DAGdMnZuNAQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h31a6108637',
    link: 'https://www.canva.com/design/DAGdMnZuNAQ/kwCnhujaYK8Kc97jpGSrgA/view?utm_content=DAGdMnZuNAQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h31a6108637'
  },
  {
    id: 6,
    title: 'Disaster Management Module',
    description: 'UI/UX and CAD module designed to assist post-disaster assessment and data tracking.',
    image: '/images/projects/dsaster.jpg',
    tags: ['UI/UX', 'CAD'],
    github: '',
    link: ''
  },
  {
    id: 7,
    title: 'PrintEase (In Development)',
    description: 'A platform to upload files, manage printing, and track orders. Designed with fullstack web technologies.',
    image: '/images/projects/printease.png',
    tags: ['UI/UX', 'HTML', 'CSS', 'JS', 'MongoDB'],
    github: 'https://github.com/Vedha17Mahadevan/PrintEase',
    link: 'https://github.com/Vedha17Mahadevan/PrintEase'
  },
  {
    id: 8,
    title: 'Vedayu',
    description: 'Web wellness platform with calming visuals and responsive UI.',
    image: '/images/projects/vedayu.jpg',
    tags: ['HTML', 'CSS', 'JS'],
    github: 'https://github.com/Vedha17Mahadevan/Aeternum-Define25',
    link: 'https://github.com/Vedha17Mahadevan/Aeternum-Define25'
  },
  {
    id: 9,
    title: 'EasyAd.AI',
    description: 'An AI-powered ad generator using React and external APIs.',
    image: '/images/projects/easyad.png',
    tags: ['React', 'API'],
    github: 'https://github.com/Vedha17Mahadevan/easyAD.ai',
    link: 'https://github.com/Vedha17Mahadevan/easyAD.ai'
  }
];

export const skills: Skill[] = [
  // Technical Skills
  { name: 'Python', level: 85, category: 'technical' },
  { name: 'Java', level: 75, category: 'technical' },
  { name: 'HTML', level: 90, category: 'technical' },
  { name: 'CSS', level: 85, category: 'technical' },
  { name: 'FastAPI', level: 80, category: 'technical' },
  { name: 'JavaScript', level: 70, category: 'technical' },
  { name: 'Database Management', level: 75, category: 'technical' },
  
  // Design Skills
  { name: 'Adobe Suite', level: 75, category: 'design' },
  { name: 'Canva', level: 90, category: 'design' },
  { name: 'Figma', level: 85, category: 'design' },
  { name: 'UI/UX Design', level: 80, category: 'design' },
  
  // Soft Skills
  { name: 'Leadership', level: 95, category: 'soft' },
  { name: 'Teamwork', level: 90, category: 'soft' },
  { name: 'Public Speaking', level: 85, category: 'soft' },
  { name: 'Adaptability', level: 90, category: 'soft' },
  { name: 'Problem Solving', level: 85, category: 'soft' }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test1',
    name: 'Alex Johnson',
    position: 'Technical Lead',
    organization: 'IEEE SB MBCET',
    content: 'Vedha\'s leadership and technical acumen have been instrumental in the success of our projects. Her ability to coordinate teams and solve complex problems is remarkable.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'test2',
    name: 'Priya Sharma',
    position: 'Design Head',
    organization: 'Design: Unlocked',
    content: 'Working with Vedha on the Design: Unlocked bootcamp was an enriching experience. Her creativity and organizational skills helped make the event a grand success.',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'test3',
    name: 'Michael Chen',
    position: 'Professor',
    organization: 'Mar Baselios College of Engineering and Technology',
    content: 'Vedha demonstrates exceptional academic prowess and leadership qualities. Her contributions to college initiatives have significantly enhanced our technical community.',
    image: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const aboutMe = {
  intro: "I'm Vedha Mahadevan, a passionate student leader and tech enthusiast currently pursuing my education at Mar Baselios College of Engineering and Technology.",
  description: "As a multifaceted individual, I balance my technical pursuits with creative endeavors. My journey encompasses leadership roles in various organizations, technical project development, and a constant quest for learning and growth. I believe in the power of community and collaboration to drive innovation and create meaningful impact.",
  education: "Bachelor's degree in Computer Science Engineering, Mar Baselios College of Engineering and Technology (2021-2025)",
  interests: ["Technology", "Dance", "Design", "Community Building", "Education"]
};
