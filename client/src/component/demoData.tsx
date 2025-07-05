import { CalendarIcon, ChatBubbleLeftRightIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { ClockIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";



import { assets } from "../assets/assets";

export const demoData = [
  {
    picture: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Liam Johnson",
    country: "Canada",
    occupation: "Software Engineer",
    speech: "It's for us to pause for a moment and remember what we’re capable of. Every challenge we face is an opportunity to grow, to learn, and to show what we’re made of. We’ve got the talent, the determination, and the drive to crush this. Let’s support each other, keep communicating, and stay focused on the goal. Together, we’re unstoppable. Let’s do this!"
  },
  {
    picture: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Emma Davis",
    country: "United Kingdom",
    occupation: "UX Designer",
    speech: "It's for us to pause for a moment and remember what we’re capable of. Every challenge we face is an opportunity to grow, to learn, and to show what we’re made of. We’ve got the talent, the determination, and the drive to crush this. Let’s support each other, keep communicating, and stay focused on the goal. Together, we’re unstoppable. Let’s do this!"
  },
  {
    picture: "https://randomuser.me/api/portraits/men/76.jpg",
    name: "Noah Kim",
    country: "South Korea",
    occupation: "Data Scientist",
    speech: "It's for us to pause for a moment and remember what we’re capable of. Every challenge we face is an opportunity to grow, to learn, and to show what we’re made of. We’ve got the talent, the determination, and the drive to crush this. Let’s support each other, keep communicating, and stay focused on the goal. Together, we’re unstoppable. Let’s do this!"
  },
  {
    picture: "https://randomuser.me/api/portraits/women/21.jpg",
    name: "Isabella Rossi",
    country: "Italy",
    occupation: "Photographer",
    speech: "It's for us to pause for a moment and remember what we’re capable of. Every challenge we face is an opportunity to grow, to learn, and to show what we’re made of. We’ve got the talent, the determination, and the drive to crush this. Let’s support each other, keep communicating, and stay focused on the goal. Together, we’re unstoppable. Let’s do this!"
  },
  {
    picture: "https://randomuser.me/api/portraits/men/58.jpg",
    name: "Ethan Smith",
    country: "Australia",
    occupation: "Digital Marketer",
    speech: "It's for us to pause for a moment and remember what we’re capable of. Every challenge we face is an opportunity to grow, to learn, and to show what we’re made of. We’ve got the talent, the determination, and the drive to crush this. Let’s support each other, keep communicating, and stay focused on the goal. Together, we’re unstoppable. Let’s do this!"
  },
  {
    picture: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Mia Chen",
    country: "Taiwan",
    occupation: "Product Manager",
    speech: "It's for us to pause for a moment and remember what we’re capable of. Every challenge we face is an opportunity to grow, to learn, and to show what we’re made of. We’ve got the talent, the determination, and the drive to crush this. Let’s support each other, keep communicating, and stay focused on the goal. Together, we’re unstoppable. Let’s do this!"
  },
  {
    picture: "https://randomuser.me/api/portraits/men/85.jpg",
    name: "Lucas Müller",
    country: "Germany",
    occupation: "Mechanical Engineer",
    speech: "It's for us to pause for a moment and remember what we’re capable of. Every challenge we face is an opportunity to grow, to learn, and to show what we’re made of. We’ve got the talent, the determination, and the drive to crush this. Let’s support each other, keep communicating, and stay focused on the goal. Together, we’re unstoppable. Let’s do this!"
  },
  {
    picture: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Sophia Dubois",
    country: "France",
    occupation: "Art Director",
    speech: "It's for us to pause for a moment and remember what we’re capable of. Every challenge we face is an opportunity to grow, to learn, and to show what we’re made of. We’ve got the talent, the determination, and the drive to crush this. Let’s support each other, keep communicating, and stay focused on the goal. Together, we’re unstoppable. Let’s do this!"
  }
];


export const startJourneyCardData = [
  {
    icon: MagnifyingGlassIcon ,
    title:'Find Your Mentor',
    subtitle: 'Browse profiles or search by category to find the perfect expert for your needs.'
  },
  {
    icon: CalendarIcon ,
    title:'Schedule a Session',
    subtitle: 'Check mentor availability and book a 1:1 session at a time that works for you.'
  },
  {
    icon: ChatBubbleLeftRightIcon ,
    title:'Connect & Grow',
    subtitle: 'Meet your mentor, gain valuable insights, and accelerate your progress.'
  },
]

export const articlesData = [
    {
      image: assets.fearOfPublic,
      title: 'Fear of Public Speaking',
      subtitle: 'Learn to control nerves, engage your audience, and present with confidence.',

    },
    {
      image: assets.imposterSyndrome,
      title: 'Overcoming Impostor Syndrome',
      subtitle: 'Say goodbye to self-doubt. Get tips from mentors who’ve been there.',

    },
    {
      image: assets.remoteWork,
      title: 'Remote Work',
      subtitle: 'Navigate time zones, virtual communication, and team engagement effectively.',

    },
]

export const testimonials = [
    {
    name: 'Emily Johnson',
    position: 'Product Manager',
    text: 'Working with this team has been an absolute pleasure. They turned our vision into reality!',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Michael Smith',
    position: 'Software Engineer',
    text: 'The level of professionalism and creativity they bring to the table is unmatched.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    name: 'Sophia Lee',
    position: 'UX Designer',
    text: 'The final product exceeded our expectations. Thank you for your hard work!',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    name: 'James Williams',
    position: 'Marketing Lead',
    text: 'The entire process was smooth, efficient, and enjoyable. Highly recommended!',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    name: 'Olivia Martinez',
    position: 'CEO',
    text: 'I appreciate the dedication and commitment to excellence. Great job!',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    name: 'David Brown',
    position: 'Operations Manager',
    text: 'Their attention to detail and creativity truly shine through.',
    image: 'https://randomuser.me/api/portraits/men/6.jpg',
  },
  {
    name: 'Ava Taylor',
    position: 'HR Specialist',
    text: 'A wonderful team to work with! They understood our needs perfectly.',
    image: 'https://randomuser.me/api/portraits/women/7.jpg',
  },
  {
    name: 'William Anderson',
    position: 'CTO',
    text: 'This project was completed ahead of schedule with exceptional quality.',
    image: 'https://randomuser.me/api/portraits/men/8.jpg',
  },
  {
    name: 'Mia Hernandez',
    position: 'Creative Director',
    text: 'Their innovative approach and dedication brought our project to life.',
    image: 'https://randomuser.me/api/portraits/women/9.jpg',
  },
  {
    name: 'Benjamin Wilson',
    position: 'Financial Analyst',
    text: 'I was impressed by their professionalism and commitment to the project.',
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
  },
  {
    name: 'Charlotte Davis',
    position: 'Account Manager',
    text: 'They truly understood our brand and delivered beyond expectations.',
    image: 'https://randomuser.me/api/portraits/women/11.jpg',
  },
  {
    name: 'Daniel Miller',
    position: 'Data Scientist',
    text: 'Exceptional work! They were easy to communicate with and very reliable.',
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
  {
    name: 'Harper Moore',
    position: 'Legal Counsel',
    text: 'The experience was seamless and the results were outstanding.',
    image: 'https://randomuser.me/api/portraits/women/13.jpg',
  },
  {
    name: 'Elijah Thompson',
    position: 'Customer Success',
    text: 'From start to finish, they handled everything with care and expertise.',
    image: 'https://randomuser.me/api/portraits/men/14.jpg',
  },
];

export const contactDetails =[
  {
    icon: PhoneIcon,
    text:"CALL US",
    details: "+63 959-9747-534" 
  },
  {
    icon: MapPinIcon,
    text:"LOCATION",
    details: "121 Kingdom Building, Taguig, Manila" 
  },
  {
    icon: ClockIcon,
    text:"BUSINESS HOURS",
    details: "Mon - Fri : 10am - 8pm" 
  },
];

export const availableDates = [
  "2025-07-06",
  "2025-07-07",
  "2025-07-08",
  "2025-07-09",
  "2025-07-10",
  "2025-07-11",
  "2025-07-12",
  "2025-07-13",
  "2025-07-14",
  "2025-07-15",
  "2025-07-16",
];

export const availableTimes = [
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
];