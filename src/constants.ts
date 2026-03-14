export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: 'Workshop' | 'Hackathon' | 'Seminar' | 'Meetup' | 'Webinar';
  status: 'Upcoming' | 'Past' | 'Ongoing';
  sortDate: string; // YYYY-MM-DD for sorting
}

export const EVENTS: Event[] = [
  {
    id: '1',
    title: 'Mastering Job Hunts During Recession',
    date: 'February 20, 2024',
    time: '2:00 PM - 3:30 PM',
    location: 'Lab 116, CSE Department',
    description: 'Secrets to High-Paying Job Roles! Insider tips, strategies, and a roadmap to thrive professionally.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800',
    category: 'Seminar',
    status: 'Past',
    sortDate: '2024-02-20',
  },
  {
    id: '2',
    title: 'Blockchain Event Winners Announcement',
    date: 'November 04, 2023',
    time: 'N/A',
    location: 'Acropolis Campus',
    description: 'Celebrating the brilliant minds and winners of our recent blockchain competition.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    category: 'Meetup',
    status: 'Past',
    sortDate: '2023-11-04',
  },
  {
    id: '3',
    title: 'Community Interactions Session',
    date: 'October 11, 2023',
    time: 'N/A',
    location: 'Acropolis Campus',
    description: 'A vibrant session focused on community interactions, networking, and sharing blockchain insights.',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800',
    category: 'Meetup',
    status: 'Past',
    sortDate: '2023-10-11',
  },
  {
    id: '4',
    title: 'Code Block: Blockchain Journey',
    date: 'March 27, 2023',
    time: '10:30 AM - 1:30 PM',
    location: 'Lab 121, CSE Department',
    description: 'Learn to build your own D-app, NFT, and Smart Contracts with Mr. Uttam Singh from Flare Network.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    category: 'Workshop',
    status: 'Past',
    sortDate: '2023-03-27',
  },
  {
    id: '5',
    title: 'Private & Public Blockchain Use Cases',
    date: 'March 10, 2023',
    time: '7:00 PM',
    location: 'Virtual (Microsoft Teams)',
    description: 'Valuable insights on industry trends and real-world applications of private and public blockchains.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    category: 'Webinar',
    status: 'Past',
    sortDate: '2023-03-10',
  },
  {
    id: '6',
    title: 'Beginners Guide to LinkedIn',
    date: 'January 17, 2023',
    time: '8:00 PM - 9:00 PM',
    location: 'Virtual (Google Meet)',
    description: 'The very first event of ABC! Teaching basics of LinkedIn profile building and networking.',
    image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=800',
    category: 'Webinar',
    status: 'Past',
    sortDate: '2023-01-17',
  },
];
