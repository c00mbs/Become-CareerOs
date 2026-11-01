import type { Profile } from '@/types';

// Fictional sample data for the UI prototype. Never present this as a real user record.
export const mockProfile: Profile = {
  id: 'demo-profile',
  full_name: 'Taylor Morgan',
  headline: 'Operations professional building a data-informed career.',
  identity_score: 72,
  experience: [
    {
      id: 'exp-1',
      company: 'Northstar Retail (Sample)',
      title: 'Operations Coordinator',
      start_date: '2021',
      end_date: '2023',
      description: 'Coordinated daily workflows, supported inventory accuracy, and documented process improvements.',
    },
    {
      id: 'exp-2',
      company: 'Meridian Services (Sample)',
      title: 'Team Lead',
      start_date: '2023',
      end_date: 'Present',
      description: 'Supported team training, shift execution, and operational reporting.',
    },
  ],
  education: [
    {
      id: 'edu-1',
      school: 'Example State University',
      degree: 'B.S. in Applied Analytics (Sample)',
      gpa: 'Not provided',
    },
  ],
  skills: [
    { id: 'skill-1', skill_name: 'Operations' },
    { id: 'skill-2', skill_name: 'Team Leadership' },
    { id: 'skill-3', skill_name: 'Data Analysis' },
    { id: 'skill-4', skill_name: 'Process Improvement' },
  ],
  certifications: [
    { id: 'cert-1', certification_name: 'Project Management Foundations (Sample)', issuer: 'Example Learning' },
  ],
};
