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
  { name: 'LinkedIn', url: 'http://www.linkedin.com/in/vedha-mahadevan', icon: 'Linkedin' },
  { name: 'GitHub', url: 'https://github.com/Vedha17Mahadevan', icon: 'Github' },
  { name: 'Devfolio', url: 'https://devfolio.co/@Vedha_Mahadevan', icon: 'Globe' },
  { name: 'MuLearn', url: 'https://app.mulearn.org/dashboard/profile', icon: 'MuLearn' },
  { name: 'Medium', url: 'https://medium.com/@vedha2327', icon: 'Medium' },
  { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/vedha2327', icon: 'Hacckerrank' },
  { name: 'Instagram', url: 'https://www.instagram.com/vedha_17_mahadevan?igsh=dWl3N2Y0eWtqd2di', icon: 'Facebook' },
  {  name: 'Facebook', url: 'https://www.facebook.com/share/16bnMiTweo/', icon: 'Instagram' }
  
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
    description: 'A basic scientific calculator app with a clean Tkinter UI, supporting essential mathematical functions. Includes a Figma prototype for UI/UX reference.',
    image: '/images/projects/calc.jpeg',
    tags: ['Python', 'UI/UX', 'Tkinter', 'Maths'],
    categories: ['all', 'basic'],
    github: 'https://github.com/Vedha17Mahadevan/Scientific-Calculator',
    presentation: 'https://www.figma.com/proto/84tEGAafLTHWcM6XNzIPH2/Calculator?page-id=0%3A1&node-id=10-3&viewport=629%2C724%2C0.16&t=ldZI2OzLHnUBHtmB-1&scaling=scale-down&content-scaling=fixed'
  },
  {
    id: 2,
    title: 'Library Manager',
    description: 'A simple library management system built with Python and FastAPI to handle books and transaction records efficiently.',
    image: '/images/projects/lib.jpg',
    tags: ['Python', 'FastAPI'],
    categories: ['all', 'basic'],
    github: 'https://github.com/Vedha17Mahadevan/Library-Management'
  },
  {
    id: 3,
    title: 'Event Registration System',
    description: 'A Java Swing-based GUI application for user registration, login, and event participation, with SQL database integration. Includes both user and admin interfaces.',
    image: '/images/projects/event.jpg',
    tags: ['Java', 'SQL', 'Java Swing'],
    categories: ['all', 'basic', 'software'],
    github: 'https://github.com/Vedha17Mahadevan/Event-Registration-System-Java',
    presentation: 'https://www.canva.com/design/DAGVPvCtWTc/efnhH_l1p06clTNQvF-Jyw/view?utm_content=DAGVPvCtWTc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h52e17a93d8'
  },
  {
    id: 4,
    title: 'BMI Calculator',
    description: 'A basic web-based BMI calculator with a simple UI for calculating Body Mass Index.',
    image: '/images/projects/bmi.jpg',
    tags: ['HTML', 'CSS', 'JS'],
    categories: ['all', 'basic'],
    github: 'https://github.com/Vedha17Mahadevan/BMI-Calculator',
    livewebsite: 'https://vedha17mahadevan.github.io/BMI-Calculator/'
  },
  {
    id: 5,
    title: 'StreetSafe',
    description: 'An IoT-based hardware and simulation project for street surveillance and safety, designed to detect broken cables and send alerts for quick response and prevention.',
    image: '/images/projects/streetSafe.png',
    tags: ['IoT Hardware', 'Simulation'],
    categories: ['all', 'hardware'],
    github: 'https://github.com/Vedha17Mahadevan/StreetSafe',
    simulation: 'https://wokwi.com/projects/411262192596413441',
    presentation: 'https://www.canva.com/design/DAGdMnZuNAQ/kwCnhujaYK8Kc97jpGSrgA/view',
    video: 'https://drive.google.com/file/d/15_y8ux1EIg6PC9M-DPrg0Q6Jx-oaVg81/view?usp=drive_link'
  },
  {
    id: 6,
    title: 'Disaster Management Module',
    description: 'UI/UX and CAD module designed to assist post-disaster assessment and data tracking.',
    image: '/images/projects/dsaster.jpg',
    tags: ['UI/UX', 'CAD'],
    categories: ['all', 'hardware', 'hackathon'],
    presentation: 'https://www.figma.com/proto/RNQjfC4XRsnkwwkBgjKvJ4/Panisthalam?page-id=706%3A853&node-id=1166-3&viewport=56%2C368%2C0.07&t=U7kGzORJjEBVRWKn-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1166%3A3'
  },
  {
    id: 7,
    title: 'PrintEase (In Development)',
    description: 'A platform to upload files, manage printing, and track orders. Designed with fullstack web technologies.',
    image: '/images/projects/printease.png',
    tags: ['UI/UX', 'HTML', 'CSS', 'JS', 'MongoDB'],
    categories: ['all', 'software'],
    github: 'https://github.com/Vedha17Mahadevan/PrintEase',
    presentation: 'https://www.canva.com/design/DAGmA6j0vSM/Mjt2DDNwCnEBuLIbBXr_tg/view?utm_content=DAGmA6j0vSM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8797375c41',
    livewebsite: 'https://vedha17mahadevan.github.io/PrintEase/',
    video: 'https://drive.google.com/drive/folders/1xN4pn-ZgyRm2ma9Sw-QudRDm60EVtPDk?usp=drive_link'
  },
  {
    id: 8,
    title: 'Vedayu',
    description: 'Web wellness platform with calming visuals and responsive UI.',
    image: '/images/projects/vedayu.jpg',
    tags: ['HTML', 'CSS', 'JS'],
    categories: ['all', 'software', 'hackathon'],
    github: 'https://github.com/Vedha17Mahadevan/Aeternum-Define25',
    presentation: 'https://www.canva.com/design/DAGhKFoDPQ4/qruGYFn1oY1FTUR6XoHN9Q/view?utm_content=DAGhKFoDPQ4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd3a8f6e33f',
    livewebsite: 'https://vedha17mahadevan.github.io/Aeternum-Define25/',
    video: 'https://www.youtube.com/playlist?list=PLCIFoEyO3D2RTOpR_PI_RCEFnwvwWnKvj'
  },
  {
    id: 9,
    title: 'EasyAd.AI',
    description: 'An AI-powered ad generator using React and external APIs.',
    image: '/images/projects/easyad.png',
    tags: ['React', 'API'],
    categories: ['all', 'software', 'hackathon'],
    github: 'https://github.com/Vedha17Mahadevan/easyAD.ai',
    livewebsite: 'https://easyadai.netlify.app/',
    video: 'https://youtu.be/SFaYZ9zB10M?si=Y_63Er0xjJ4NRGPn'
  },
  {
    id: 10,
    title: 'Socio',
    description: 'A community collaboration platform designed as a hackathon project to foster local engagement.',
    image: '/images/projects/socio.png',
    tags: ['Community', 'Web Platform'],
    categories: ['all', 'software', 'hackathon'],
    github: 'https://github.com/Vedha17Mahadevan/Socio-Auraflix-Final',
    presentation: 'https://www.canva.com/design/DAGieWe5oxg/XvqFXYjCAro1sKnI2i7SJQ/view?utm_content=DAGieWe5oxg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h757af81a6d',
    livewebsite: 'https://christoms14.github.io/Socio---Auraflix-Hackathon/',
    video:'https://youtube.com/playlist?list=PL5cPmFFFJQdUpLWbEY_DwGSdQBxTJbhz8&feature=shared'
  },
  {
    id: 11,
    title: 'AgroSentry',
    description: 'An IoT and CAD-based hardware prototype for precision farming and soil monitoring.',
    image: '/images/projects/agrosentry.png',
    tags: ['IoT', 'Sensors', 'CAD'],
    categories: ['all', 'hardware'],
    github: 'https://github.com/Vedha17Mahadevan/AgroSentry',
    video: 'https://drive.google.com/file/d/1VEIFK0epZZ4QUppOdBLWePd41VBoAF-h/view?usp=drive_link'
  }
];

export const skills: Skill[] = [
  // Technical Skills
  { name: 'C', level: 80, category: 'technical' },
  { name: 'Python', level: 70, category: 'technical' },
  { name: 'Java', level: 70, category: 'technical' },
  { name: 'HTML', level: 60, category: 'technical' },
  { name: 'CSS', level: 55, category: 'technical' },
  { name: 'JavaScript', level: 55, category: 'technical' },
  { name: 'Database Management', level: 75, category: 'technical' },
  
  // Design Skills
  { name: 'Canva', level: 80, category: 'design' },
  { name: 'Figma', level: 80, category: 'design' },
  
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
