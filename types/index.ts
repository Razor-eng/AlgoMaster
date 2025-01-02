export interface Language {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  topics: string[];
  languages: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  progress: {
    completedChallenges: string[];
    currentStreak: number;
    totalPoints: number;
  };
}

export interface Algorithm {
  title: string;
  description: string;
  topics: string[];
  slug: string;
}
