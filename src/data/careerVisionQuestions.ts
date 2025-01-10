import { Section } from '../types/assessment';

export const careerVisionSection: Section = {
  id: 'vision',
  title: 'Career Vision Assessment',
  description: 'This assessment helps us understand your career aspirations and create a personalized roadmap for your future.',
  questions: [
    // Likert scale questions (1-5: Strongly Disagree to Strongly Agree)
    {
      id: 'cv1',
      text: 'I enjoy exploring new ideas or subjects.',
      type: 'likert'
    },
    {
      id: 'cv2',
      text: 'I like learning about new cultures or traditions.',
      type: 'likert'
    },
    {
      id: 'cv3',
      text: 'I make sure to complete my homework/assignments on time.',
      type: 'likert'
    },
    {
      id: 'cv4',
      text: 'I am well-organized and keep my study materials/books in order.',
      type: 'likert'
    },
    {
      id: 'cv5',
      text: 'I enjoy participating in group discussions in class.',
      type: 'likert'
    },
    {
      id: 'cv6',
      text: 'I like being the centre of attention at social gatherings.',
      type: 'likert'
    },
    {
      id: 'cv7',
      text: 'I often help my classmates with their studies.',
      type: 'likert'
    },
    {
      id: 'cv8',
      text: 'I get along well with most of my classmates and teachers.',
      type: 'likert'
    },
    {
      id: 'cv9',
      text: 'I often feel anxious before exams.',
      type: 'likert'
    },
    {
      id: 'cv10',
      text: "I get upset easily when things don't go as planned or as expected.",
      type: 'likert'
    },
    {
      id: 'cv11',
      text: 'I enjoy working on science/non-science projects or experiments.',
      type: 'likert'
    },
    {
      id: 'cv12',
      text: 'I enjoy solving puzzles and brainteasers.',
      type: 'likert'
    },
    {
      id: 'cv13',
      text: 'I like doing research on topics that interest me.',
      type: 'likert'
    },
    {
      id: 'cv14',
      text: 'I enjoy drawing, painting, designing, or any other forms of art.',
      type: 'likert'
    },
    {
      id: 'cv15',
      text: 'I like writing stories, poems, or essays.',
      type: 'likert'
    },
    {
      id: 'cv16',
      text: 'I enjoy helping my friends with their problems.',
      type: 'likert'
    },
    {
      id: 'cv17',
      text: 'I like participating in community service activities.',
      type: 'likert'
    },
    {
      id: 'cv18',
      text: 'I enjoy working with numbers and data.',
      type: 'likert'
    },
    {
      id: 'cv19',
      text: 'I like following a set schedule and routine.',
      type: 'likert'
    },
    {
      id: 'cv20',
      text: 'I enjoy working and studying with others.',
      type: 'likert'
    },
    {
      id: 'cv21',
      text: 'I value the support and guidance from my teachers and parents.',
      type: 'likert'
    },
    {
      id: 'cv22',
      text: 'Having supportive friends is important to me.',
      type: 'likert'
    },
    // Multiple choice questions
    {
      id: 'cv23',
      text: 'Which of the following best describe your personality?',
      type: 'multiple',
      options: [
        'Creative and innovative',
        'Analytical and logical',
        'Organized and methodical',
        'Social and outgoing',
        'Independent and self-reliant',
        'Caring and supportive',
        'Detail-oriented and precise',
        'Adaptable and flexible'
      ]
    },
    {
      id: 'cv24',
      text: 'How do you typically handle challenges?',
      type: 'multiple',
      options: [
        'Break them into smaller tasks',
        'Seek help from others',
        'Research and analyze thoroughly',
        'Trust my instincts',
        'Try different approaches',
        'Stay persistent until solved',
        'Learn from failures',
        'Plan before acting'
      ]
    },
    {
      id: 'cv25',
      text: 'What activities do you enjoy in your free time?',
      type: 'multiple',
      options: [
        'Reading and learning',
        'Sports and physical activities',
        'Arts and crafts',
        'Technology and gaming',
        'Music and performing arts',
        'Social activities',
        'Volunteering and helping others',
        'Problem-solving activities'
      ]
    },
    // Skills and Aptitude Based
    {
      id: 'cv26',
      text: 'What is the next number in the sequence 2, 4, 8, 16, ...?',
      type: 'choice',
      options: ['24', '32', '64', '128']
    },
    {
      id: 'cv27',
      text: 'What is 15% of 200?',
      type: 'choice',
      options: ['20', '30', '40', '50']
    },
    {
      id: 'cv28',
      text: 'Which word does not belong in the following list? Dog, Cat, Bird, Car.',
      type: 'choice',
      options: ['Dog', 'Cat', 'Bird', 'Car']
    },
    {
      id: 'cv29',
      text: 'Which shape completes the pattern: Circle → Square → Triangle → ?',
      type: 'choice',
      options: ['Circle', 'Square', 'Triangle', 'Pentagon']
    },
    // Preferences Based
    {
      id: 'cv30',
      text: 'I prefer working in a group rather than alone.',
      type: 'likert'
    },
    {
      id: 'cv31',
      text: 'I like taking on leadership roles in a group.',
      type: 'likert'
    },
    {
      id: 'cv32',
      text: 'Which career clusters interest you?',
      type: 'multiple',
      options: [
        'Science and Research',
        'Technology and IT',
        'Healthcare and Medicine',
        'Business and Finance',
        'Arts and Design',
        'Education and Teaching',
        'Engineering',
        'Law and Legal Services',
        'Media and Communications',
        'Social Services',
        'Architecture and Construction',
        'Environmental Science',
        'Hospitality and Tourism',
        'Manufacturing',
        'Government and Public Service',
        'Agriculture and Natural Resources'
      ]
    }
  ]
};