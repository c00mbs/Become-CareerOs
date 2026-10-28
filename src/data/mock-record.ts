import type { Profile } from '@/types';

export const mockProfile: Profile = {
  id: 'profile-1',
  full_name: 'Stephanie Coombs',
  headline: 'Operations-minded builder with a growing data story.',
  identity_score: 87,
  experience: [
    {
      id: 'exp-1',
      company: 'Family Dollar',
      title: 'Operations Associate',
      start_date: '2020',
      end_date: '2021',
      description: 'Supported daily operations, improved workflow consistency, and contributed to customer-facing execution.',
    },
    {
      id: 'exp-2',
      company: 'Best Buy',
      title: 'Customer Experience Specialist',
      start_date: '2022',
      end_date: '2023',
      description: 'Worked across service and performance goals while building strong communication and operational awareness.',
    },
    {
      id: 'exp-3',
      company: 'Wawa',
      title: 'Store Operations Team Member',
      start_date: '2024',
      end_date: '2025',
      description: 'Helped maintain smooth shift operations and build systems for reliability, speed, and team coordination.',
    },
  ],
  education: [
    {
      id: 'edu-1',
      school: 'Penn State',
      degree: 'BS Data Science',
      gpa: '3.7',
    },
  ],
  skills: [
    { id: 'skill-1', skill_name: 'Leadership' },
    { id: 'skill-2', skill_name: 'Operations' },
    { id: 'skill-3', skill_name: 'Analytics' },
    { id: 'skill-4', skill_name: 'Python' },
  ],
  certifications: [
    { id: 'cert-1', certification_name: 'Lean Six Sigma', issuer: 'Industry' },
  ],
};
