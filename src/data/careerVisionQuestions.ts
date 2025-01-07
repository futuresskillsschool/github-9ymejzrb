import { Section } from '../types/assessment';

export const careerVisionSection: Section = {
  id: 'vision',
  title: 'Career Vision Assessment',
  description: 'This assessment helps us understand your career aspirations and create a personalized roadmap for your future.',
  questions: [
    // ... keep existing likert questions cv1-cv22 ...

    {
      id: 'cv23',
      text: 'Which of the following best describe your personality? (Select all that apply)',
      type: 'multiple',
      options: [
        'Creative and innovative',
        'Analytical and logical',
        'Organized and methodical',
        'Social and outgoing',
        'Independent and self-reliant',
        'Caring and supportive',
        'Detail-oriented and precise',
        'Adaptable and flexible',
        'Leadership-oriented',
        'Team-focused'
      ]
    },
    {
      id: 'cv24',
      text: 'How do you typically handle challenges? (Select all that apply)',
      type: 'multiple',
      options: [
        'Break them into smaller tasks',
        'Seek help and advice from others',
        'Research and analyze thoroughly',
        'Trust my instincts and experience',
        'Try different approaches',
        'Stay persistent until solved',
        'Learn from failures and adjust',
        'Plan carefully before acting',
        'Collaborate with others',
        'Focus on one aspect at a time'
      ]
    },
    {
      id: 'cv25',
      text: 'What activities do you enjoy in your free time? (Select all that apply)',
      type: 'multiple',
      options: [
        'Reading and continuous learning',
        'Sports and physical activities',
        'Arts and creative expression',
        'Technology and digital creation',
        'Music and performing arts',
        'Social gatherings and events',
        'Volunteering and community service',
        'Problem-solving and puzzles',
        'Nature and outdoor activities',
        'Writing and content creation',
        'Photography and visual arts',
        'Cooking and culinary arts'
      ]
    },

    // ... keep existing questions cv26-cv31 ...

    {
      id: 'cv32',
      text: 'Which career clusters interest you? (Select all that apply)',
      type: 'multiple',
      options: [
        'Science and Research',
        'Technology and Software Development',
        'Healthcare and Medical Services',
        'Business and Entrepreneurship',
        'Finance and Investment',
        'Arts and Creative Design',
        'Education and Training',
        'Engineering and Innovation',
        'Law and Legal Services',
        'Media and Communications',
        'Social Services and Counseling',
        'Architecture and Urban Planning',
        'Environmental Science and Sustainability',
        'Hospitality and Tourism Management',
        'Manufacturing and Production',
        'Government and Public Administration',
        'Agriculture and Natural Resources',
        'Marketing and Advertising',
        'Human Resources and Talent Development',
        'International Relations and Diplomacy'
      ]
    }
  ]
};