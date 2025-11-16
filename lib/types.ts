export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

export type PromptScoreResult = {
  score: number;
  criteria: Record<string, number>;
  suggestions: string[];
  clarifyingQuestions: string[];
};

export type PromptStatus = 'draft' | 'published' | 'archived';
export type PromptVisibility = 'private' | 'shared' | 'public';
