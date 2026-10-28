export type Profile = {
  id: string;
  full_name: string;
  headline: string;
  identity_score: number;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  certifications: Certification[];
};

export type Experience = {
  id: string;
  company: string;
  title: string;
  start_date: string;
  end_date: string;
  description: string;
};

export type Education = {
  id: string;
  school: string;
  degree: string;
  gpa: string;
};

export type Skill = {
  id: string;
  skill_name: string;
};

export type Certification = {
  id: string;
  certification_name: string;
  issuer: string;
};
