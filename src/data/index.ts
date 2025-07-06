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
    id: 'proj1',
    title: 'Scientific Calculator',
    description: 'An advanced calculator offering equation solving and more functionality for scientific computations.',
    image: 'https://images.pexels.com/photos/959816/pexels-photo-959816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Python', 'UI/UX', 'Mathematics'],
    link: 'https://devfolio.co/'
  },
  {
    id: 'proj2',
    title: 'Library Management System',
    description: 'A basic library management system implemented using FastAPI, enabling efficient book tracking and user management.',
    image: 'https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Python', 'FastAPI', 'Database'],
    link: 'https://devfolio.co/'
  },
  {
    id: 'proj3',
    title: 'Event Registration System',
    description: 'A Java-based application for managing event registrations, attendee tracking, and event analytics.',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Java', 'UI/UX', 'Database'],
    link: 'https://devfolio.co/'
  },
  {
    id: 'proj4',
    title: 'BMI Calculator',
    description: 'A tool to calculate Body Mass Index with personalized health recommendations based on results.',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['JavaScript', 'Health', 'UI/UX'],
    link: 'https://devfolio.co/'
  },
  {
    id: 'proj5',
    title: 'StreetSafe',
    description: 'A design project focusing on public safety through innovative technological solutions.',
    image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['UX Design', 'Safety', 'Prototype'],
    link: ''
  },
  {
    id: 'proj6',
    title: 'Disaster Management Module',
    description: 'A module aimed at managing disaster-related data and coordinating response efforts efficiently.',
    image: 'https://images.pexels.com/photos/2949172/pexels-photo-2949172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Python', 'Data Management', 'Crisis Response'],
    link: 'https://devfolio.co/'
  },
  {
    id: 'proj7',
    title: 'Printease',
    description: 'A project currently in development, focusing on streamlined printing solutions for academic institutions.',
    image: 'https://images.pexels.com/photos/5816299/pexels-photo-5816299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['In Development', 'Printing', 'Automation'],
    link: ''
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